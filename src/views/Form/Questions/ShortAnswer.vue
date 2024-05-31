<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap"> {{ node.order_number }}. {{ node.title }} </v-card-title>
        <v-card-text>
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description"> {{ node.description }} </v-container>
            <v-form ref="form" v-model="valid">
                <v-text-field v-model="answer" label="請輸入……" variant="solo"></v-text-field>
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
            answer: null,
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
