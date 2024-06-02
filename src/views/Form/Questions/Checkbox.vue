<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap pb-0" :class="{ 'text-subtitle-1': node.parent_type !== 'App\\Models\\Form' }">
            {{ node.order_number }}. {{ node.title }}
            <span class="text-caption text-error text-no-wrap">
                {{ nodeRules.required ? "必填欄位" : "" }}
            </span>
        </v-card-title>
        <v-card-text class="pt-0">
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description">
                {{ node.description }}
            </v-container>
            <v-form ref="form" v-model="valid">
                <template v-for="option in node.options" :key="option.id">
                    <v-checkbox v-model="answer" :readonly="configs.readonly ?? false" :label="option.title"
                        :rules="rules" :value="option.value" density="compact" hide-details="auto" return-object>
                    </v-checkbox>
                    <v-container v-if="option.nodes && answer.includes(option.value)" fluid class="sub-node pa-0">
                        <template v-for="n in option.nodes" :key="n.id">
                            <Node class="fixed-title" :class="`order-${n.order_number}`" ref="node" :node="n" />
                        </template>
                    </v-container>
                </template>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script setup>
import Node from "../Node.vue";
import { useDisplay } from "vuetify";

const { width } = useDisplay();
</script>

<script>
export default {
    props: {
        node: {
            type: Object,
            required: true,
            default: () => ({
                configs: {},
                rules: {},
                options: [],
            }),
        },
    },
    data() {
        return {
            valid: false,
            answer: [],
            rules: [],
        };
    },
    computed: {
        configs() {
            return this.node.configs ?? {};
        },
        nodeRules() {
            return this.node.rules ?? {};
        },
    },
    methods: {
        initRules() {
            this.rules = [];
            for (const [key, value] of Object.entries(this.nodeRules)) {
                switch (key) {
                    case "required":
                        if (this.nodeRules[key])
                            this.rules.push(
                                (v) => v.length !== 0 || "請選擇一個選項"
                            );
                        break;
                    case "mutually_exclusive":
                        this.rules.push((v) => {
                            const getTitles = (options) =>
                                options.map(
                                    (o) =>
                                        this.node.options.find(
                                            ({ value }) => value === o
                                        ).title
                                );
                            const errorMessages = value.flatMap(
                                ({ select, clear }) => {
                                    const selectedOptions = select.filter((s) =>
                                        v.includes(s)
                                    );
                                    const clearOptions = clear.filter((c) =>
                                        v.includes(c)
                                    );
                                    const selectedOptionsTitle =
                                        getTitles(selectedOptions);
                                    const clearOptionsTitle =
                                        getTitles(clearOptions);
                                    return selectedOptions.length > 0 &&
                                        clearOptions.length > 0
                                        ? `【${selectedOptionsTitle.join(
                                            ", "
                                        )}】 和 【${clearOptionsTitle.join(
                                            ", "
                                        )}】 不能同時選擇`
                                        : [];
                                }
                            );
                            return (
                                errorMessages.length === 0 || errorMessages[0]
                            );
                        });
                        break;
                    default:
                        break;
                }
            }
        },
    },
    mounted() {
        this.initRules();
    },
};
</script>

<style scoped>
:deep(.v-expansion-panel-text__wrapper) {
    padding: 0;
}
</style>
