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
                <v-container v-if="width >= 1440" fluid class="border">
                    <v-row class="bg-green py-1">
                        <v-col :offset="node.options.length >= 8 ? 5 : node.options.length <= 3 ? 10 : 8"
                            :lg="node.options.length >= 8 ? 7 : node.options.length <= 3 ? 2 : 4">
                            <v-radio-group inline hide-details="auto">
                                <v-row class="flex-nowrap">
                                    <v-col v-for="option in node.options" :key="option.id" class="text-center">
                                        <v-container class="pa-0">{{ option.title }}</v-container>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row v-for="(scale, index) in node.configs.scales" :key="index"
                        :class="{ 'bg-green-lighten-5': index % 2 == 0 }">
                        <v-col cols="12" :lg="node.options.length >= 8 ? 5 : node.options.length <= 3 ? 10 : 8"
                            class="text-subtitle-1">
                            ({{ index + 1 }}) {{ scale.title }}
                        </v-col>
                        <v-col cols="12" :lg="node.options.length >= 8 ? 7 : node.options.length <= 3 ? 2 : 4">
                            <v-radio-group inline v-model="answer[index]" :rules="rules" hide-details="auto">
                                <v-row class="flex-nowrap">
                                    <v-col v-for="option in node.options" :key="option.value" class="text-center">
                                        <v-radio :value="option.value"></v-radio>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-else fluid class="rounded-xl border bg-green-lighten-5">
                    <v-row v-for="(scale, index) in node.configs.scales" :key="index">
                        <v-col cols="12" class="text-subtitle-1 pb-0">
                            ({{ index + 1 }}) {{ scale.title }}
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-radio-group inline v-model="answer[index]" :rules="rules" hide-details="auto">
                                <v-radio v-for="option in node.options" :key="option.value" :label="option.title"
                                    :value="option.value"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-container>
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