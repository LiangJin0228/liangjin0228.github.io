<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap"> {{ newPrependOrderNumber }}. {{ node.title }} </v-card-title>
        <v-card-text>
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description"> {{ node.description }} </v-container>
            <v-form ref="form" v-model="valid">
                <v-select v-model="selected" :items="node.options" variant="solo" label="請選擇"
                    :required="node.configs.required" return-object class="mt-5" clearable></v-select>
            </v-form>
        </v-card-text>

        <v-container fluid class="ma-0 pa-0" v-if="selected && selected.nodes">
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
            selected: null,
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
                    answer: this.selected,
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
            return v.length !== 0 || "請選擇一個選項";
        },
    },
    watch: {
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
