<template>
    <v-card :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap"> {{ node.order_number }}. {{ node.title }} </v-card-title>
        <v-card-text>
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description"> {{ node.description }} </v-container>
            <v-form ref="form" v-model="valid">
                <template v-for="(option, index) in node.options" :key="option.id">
                    <v-container fluid class="ma-0 pa-0">
                        <v-checkbox :hide-details="index !== node.options.length - 1" v-model="selected"
                            :label="option.title" :rules="rules" :value="option.value" density="compact" return-object>
                        </v-checkbox>

                        <v-container v-if="option.nodes && selected.includes(option.value)" fluid class="ma-0 pa-0">
                            <v-expansion-panels multiple v-model="panels">
                                <v-expansion-panel v-for="n in option.nodes" :key="n.id" :value="n.id">
                                    <v-expansion-panel-title>{{ n.title }}</v-expansion-panel-title>
                                    <v-expansion-panel-text class="pa-0">
                                        <Node :node="n" />
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
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
            panels: [],
            selected: [],
            rules: [
                (v) => { return v.length !== 0 || "請選擇一個選項" },
            ],
        };
    },
    // watch: {
    //     selected(newValue, oldValue) {
    //         this.mutually_exclusive(this.node.rules.mutually_exclusive);
    //         newValue.forEach((v) => {
    //             if (!oldValue.includes(v)) {
    //                 let option = this.node.options.find((o) => o.value === v);
    //                 if (option.nodes) {
    //                     option.nodes.forEach((n) => {
    //                         if (this.panels.indexOf(n.id) === -1) {
    //                             this.panels.push(n.id);
    //                         }
    //                     });
    //                 }
    //             }
    //         })
    //     },
    // },
    methods: {
        // mutually_exclusive(exclusiveArray) {
        //     let selected = this.selected;
        //     exclusiveArray.forEach((pair) => {
        //         let select = pair.select;
        //         let clear = pair.clear;
        //         select.some((s) => {
        //             clear.some((c) => {
        //                 let prompt = `選項 "${s}" 和 "${c}" 不能同時選擇`;
        //                 if (selected.includes(s) && selected.includes(c)) {
        //                     this.rules.push(prompt);
        //                 } else {
        //                     this.rules = this.rules.filter((r) => r != prompt);
        //                 }
        //             });
        //         });
        //     });
        // },
        is_required(v) {
            return v.length !== 0 || "請選擇一個選項";
        },
    },
    mounted() {
    },
};
</script>
