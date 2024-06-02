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
                <v-text-field v-model="answer" :label="configs.label ?? '請輸入……'" variant="solo"
                    :clearable="configs.clearable ?? true" :placeholder="configs.placeholder ?? ''"
                    :counter="nodeRules.max ?? false" :readonly="configs.readonly ?? false" :rules="rules"
                    persistent-counter></v-text-field>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
    setup() {
        const { width } = useDisplay();
        return { width };
    },
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
            answer: "",
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
            for (const key in this.nodeRules) {
                switch (key) {
                    case "required":
                        if (this.nodeRules[key])
                            this.rules.push((v) => !!v || "必填欄位");
                        break;
                    case "min":
                        this.rules.push(
                            (v) =>
                                v.length >= this.nodeRules[key] ||
                                `最少 ${this.nodeRules[key]} 字`
                        );
                        break;
                    case "max":
                        this.rules.push(
                            (v) =>
                                v.length <= this.nodeRules[key] ||
                                `最多 ${this.nodeRules[key]} 字`
                        );
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
