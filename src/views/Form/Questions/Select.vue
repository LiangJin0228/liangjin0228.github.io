<template>
    <v-card :id="node.id" v-if="!node.isSkipped" :hover="width >= 1440" variant="text" class="cursor-default">
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
                <v-select v-model="answer" :items="node.options" :label="configs.label ?? '請選擇'" variant="solo"
                    :clearable="configs.clearable ?? true" :readonly="configs.readonly ?? false" :rules="rules"
                    hide-details="auto" return-object></v-select>
                <v-container fluid v-if="answer && answer.nodes" class="sub-node pa-0">
                    <template v-for="n in answer.nodes" :key="n.id">
                        <Node class="fixed-title" :class="`order-${n.order_number}`" ref="node" :node="n" />
                    </template>
                </v-container>
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
            answer: null,
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
        node: {
            handler(newValue) {
                this.initRules();
                if (newValue.isSkipped) {
                    this.answer = null;
                }
            },
            deep: true
        },
        answer(newValue) {
            this.node.options.forEach((option) => {
                if (option.skip) {
                    this.$emit("rollBackNode", option.skip);
                }
            });

            if (newValue && newValue.skip) {
                newValue.skip.forEach(node => {
                    this.$emit("skipNode", node);
                });
            }
        },
    },
    methods: {
        initRules() {
            this.rules = [];
            for (const key in this.nodeRules) {
                switch (key) {
                    case "required":
                        if (this.nodeRules[key])
                            this.rules.push((v) => !!v || "必填欄位");
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
