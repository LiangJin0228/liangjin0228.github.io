<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap"> {{ node.order_number }}. {{ node.title }} </v-card-title>
        <v-card-text>
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description"> {{ node.description }} </v-container>
            <v-form ref="form" v-model="valid">
                <template v-for="option in node.options" :key="option.id">
                    <v-container fluid class="ma-0 pa-0">
                        <v-radio @click="selectedRadio = option.value" :model-value="selectedRadio"
                            :label="option.title" :value="option.value"></v-radio>

                        <v-container v-if="option.nodes && selectedRadio === option.value" fluid class="ma-0 pa-0">
                            <Node v-for="n in option.nodes" :key="n.id" @answerChanged="answerChanged"
                                @anserValidated="anserValidated" :validateFormTimes="validateFormTimes"
                                :prependOrderNumber="node.order_number" :node="n" />
                        </v-container>
                    </v-container>
                </template>

            </v-form>
        </v-card-text>
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
            selectedRadio: null,
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
