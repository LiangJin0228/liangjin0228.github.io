<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap"> {{ node.order_number }}. {{ node.title }} </v-card-title>
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
                :validateFormTimes="validateFormTimes" :settings="settings" :prependOrderNumber="node.order_number"
                :node="n" />
        </v-container>
    </v-card>
</template>

<script setup>
import Node from "../Node.vue";
</script>

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
            selected: null,
            rules: [],
        };
    },
    methods: {
        is_required(v) {
            return v.length !== 0 || "請選擇一個選項";
        },
    },
    mounted() {
    },
};
</script>
