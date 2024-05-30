<template>
    <v-card hover variant="text" class="cursor-default">
        <v-card-title class="text-wrap"> {{ newPrependOrderNumber }}. {{ node.title }} </v-card-title>
        <v-card-text>
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description"> {{ node.description }} </v-container>

            <v-form ref="form" v-model="valid">
                <v-container v-if="width >= 1440" fluid>
                    <v-row class="bg-green py-1">
                        <v-col :offset="node.configs.scales.length >= 8 ? 5 : node.configs.scales.length <= 3 ? 10 : 8"
                            :lg="node.configs.scales.length >= 8 ? 7 : node.configs.scales.length <= 3 ? 2 : 4">
                            <v-radio-group inline hide-details="auto">
                                <v-row class="flex-nowrap">
                                    <v-col v-for="scale in node.configs.scales" :key="scale.id" class="text-center">
                                        <v-container class="pa-0">{{ scale.title }}</v-container>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row v-for="(option, index) in node.options" :key="index"
                        :class="{ 'bg-green-lighten-5': index % 2 == 0 }">
                        <v-col cols="12"
                            :lg="node.configs.scales.length >= 8 ? 5 : node.configs.scales.length <= 3 ? 10 : 8"
                            class="text-subtitle-1">
                            ({{ index + 1 }}) {{ option.title }}
                        </v-col>
                        <v-col cols="12"
                            :lg="node.configs.scales.length >= 8 ? 7 : node.configs.scales.length <= 3 ? 2 : 4">
                            <v-radio-group inline v-model="radios[index]" :rules="rules" hide-details="auto">
                                <v-row class="flex-nowrap">
                                    <v-col v-for="scale in node.configs.scales" :key="scale.value" class="text-center">
                                        <v-radio :value="scale.value"></v-radio>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-else fluid class="border bg-green-lighten-5" style="width: inherit; overflow-x: auto;">
                    <v-row v-for="(option, index) in node.options" :key="index"
                        style="width: inherit; overflow-x: auto;">
                        <v-col cols="12" class="text-subtitle-1">
                            ({{ index + 1 }}) {{ option.title }}
                        </v-col>
                        <v-col cols="12">
                            <v-row class="py-1">
                                <v-col cols="12">
                                    <v-radio-group inline hide-details="auto">
                                        <v-row class="flex-nowrap">
                                            <v-col v-for="scale in node.configs.scales" :key="scale.value"
                                                class="bg-green text-center border pa-0">
                                                <v-container class="pa-0">{{ scale.title }}</v-container>
                                                <v-radio style="visibility: hidden;"></v-radio>
                                            </v-col>
                                        </v-row>
                                    </v-radio-group>
                                </v-col>

                                <v-col cols="12">
                                    <v-radio-group inline v-model="radios[index]" :rules="rules" hide-details="auto">
                                        <v-row class="flex-nowrap">
                                            <v-col v-for="scale in node.configs.scales" :key="scale.value"
                                                class="text-center border pa-0">
                                                <v-radio :value="scale.value"></v-radio>
                                            </v-col>
                                        </v-row>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>

        <v-container fluid v-if="node.nodes">
            <Node v-for="n in node.nodes" :key="n.id" @answerChanged="answerChanged" @anserValidated="anserValidated"
                :validateFormTimes="validateFormTimes" :settings="settings" :prependOrderNumber="newPrependOrderNumber"
                :node="n" />
        </v-container>
    </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";
import Node from "./Node.vue";

const { width } = useDisplay();
</script>

<script>
export default {
    props: {
        validateFormTimes: {
            type: Number,
            required: true,
        },
        prependOrderNumber: {
            type: [String, Number],
            required: false,
            default: null,
        },
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
            radios: [],
            rules: [],
        };
    },
    computed: {
        newPrependOrderNumber() {
            if (this.prependOrderNumber && this.prependOrderNumber !== 0) {
                return `${this.prependOrderNumber}-${this.node.order_number}`;
            } else {
                return this.node.order_number;
            }
        },
    },
    methods: {
        checkAnswer() {
            this.$refs.form.validate();
            if (this.$refs.form.isValid) {
                this.answerChanged();
                this.anserValidated();
            }
        },
        answerChanged(event) {
            if (event && event.node.id !== this.node.id) {
                this.$emit("answerChanged", event);
            } else {
                this.$emit("answerChanged", {
                    node: this.node,
                    answer: this.radios,
                });
            }
        },
        anserValidated(event) {
            if (event && event.node.id !== this.node.id) {
                this.$emit("anserValidated", event);
            } else {
                this.$emit("anserValidated", {
                    node: this.node,
                    validateFormTimes: this.validateFormTimes,
                });
            }
        },
        is_required(v) {
            return !!v || "請選擇一個選項";
        },
    },
    watch: {
        radios() {
            this.answerChanged();
        },
        validateFormTimes() {
            this.checkAnswer();
        },
    },
    mounted() {
        let rules = this.node.rules;
        for (let rule in rules) {
            if (rule && rule !== "mutually_exclusive") {
                this.rules.push(this.$options.methods[rule]);
            }
        }
    },
};
</script>