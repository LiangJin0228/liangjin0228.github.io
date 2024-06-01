<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title v-if="node.parent_type === 'App\\Models\\Form'" class="text-wrap pb-0">
            {{ node.order_number }}. {{ node.title }}
            <span class="text-caption text-error text-no-wrap">{{ nodeRules.required ? '必填欄位' : '' }}</span>
        </v-card-title>
        <v-card-text class="pt-0">
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description"> {{ node.description }} </v-container>
            <v-form ref="form" v-model="valid">
                <v-select v-model="answer" :items="node.options" :label="configs.label ?? '請選擇'" variant="solo"
                    :clearable="configs.clearable ?? true" :readonly="configs.readonly ?? false" :rules="rules"
                    hide-details="auto" return-object></v-select>
                <v-container fluid v-if="answer && answer.nodes">
                    <v-expansion-panels multiple v-model="panels">
                        <v-expansion-panel v-for="n in answer.nodes" :key="n.id" :value="n.id">
                            <v-expansion-panel-title>
                                <v-container fluid class="pa-0">
                                    {{ n.order_number }}. {{ n.title }}
                                    <span class="text-caption text-error text-no-wrap">
                                        {{ n.rules.required ? '必填欄位' : '' }}
                                    </span>
                                </v-container>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="pa-0">
                                <Node class="fixed-title" :class="`order-${n.order_number}`" ref="node" :node="n" />
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
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
            panels: [],
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
        answer(newValue) {
            this.panels = [];
            if (newValue && newValue.nodes) {
                this.panels = newValue.nodes.map((n) => n.id);
            }
        },
    },
    methods: {
        initRules() {
            this.rules = [];
            for (const key in this.nodeRules) {
                switch (key) {
                    case "required":
                        if (this.nodeRules[key]) this.rules.push((v) => !!v || "必填欄位");
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