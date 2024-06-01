<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title v-if="node.parent_type === 'App\\Models\\Form'" class="text-wrap pb-0">
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
                <template v-for="(option, index) in node.options" :key="option.id">
                    <v-checkbox v-model="answer" :readonly="configs.readonly ?? false" :label="option.title"
                        :rules="rules" :value="option.value" density="compact"
                        :hide-details="index !== node.options.length - 1" return-object>
                    </v-checkbox>
                    <v-container v-if="option.nodes && answer.includes(option.value)" fluid>
                        <v-expansion-panels multiple v-model="panels[index]">
                            <v-expansion-panel v-for="n in option.nodes" :key="n.id" :value="n.id">
                                <v-expansion-panel-title>
                                    <v-container fluid class="pa-0">
                                        {{ n.order_number }}. {{ n.title }}
                                        <span class="text-caption text-error text-no-wrap">
                                            {{
                                                n.rules.required
                                                    ? "必填欄位"
                                                    : ""
                                            }}
                                        </span>
                                    </v-container>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="pa-0">
                                    <Node class="fixed-title" :class="`order-${n.order_number}`" ref="node" :node="n" />
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
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
            panels: [],
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
    watch: {
        valid(newValue) {
            if (!newValue) this.panels = [];
        },
        answer(newValue, oldValue) {
            newValue
                .filter((v) => !oldValue.includes(v))
                .forEach((v) => {
                    let option = this.node.options.find((o) => o.value === v);
                    if (option && option.nodes) {
                        let optionIndex = this.node.options.findIndex(
                            (o) => o.value === v
                        );
                        this.panels[optionIndex] =
                            this.panels[optionIndex] ?? [];
                        this.panels[optionIndex] = option.nodes.map(
                            (n) => n.id
                        );
                    }
                });
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
