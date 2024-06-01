<template>
    <v-card v-if="node" color="brown-lighten-5">
        <v-layout>
            <v-app-bar color="primary" v-if="mode === 'edit'" class="elevation-0">
                <slot name="editToolbar.prepend"></slot>
                <v-spacer></v-spacer>
                <slot name="editToolbar.append" :settings="sectionSettings"></slot>
            </v-app-bar>
            <v-main>
                <v-container fluid class="text-h6">
                    <span v-if="
                        prependOrderNumber &&
                        prependOrderNumber !== 0 &&
                        node.title
                    ">
                        {{ prependOrderNumber }}.
                        {{ node.title }}
                    </span>
                </v-container>

                <v-container fluid class="pt-0" v-if="node.description">
                    {{ node.description }}
                </v-container>

                <v-container fluid class="pt-0">
                    <template v-for="n in node.nodes" :key="n.id">
                        <Node :settings="settings" :prependOrderNumber="node.prependOrderNumber" :node="n" />
                    </template>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script setup>
import Node from "./Node.vue";
</script>

<script>
export default {
    props: {
        node: {
            type: Object,
            required: true,
            default: () => ({
                configs: {},
                options: [],
            }),
        },
    },
    mounted() { },
};
</script>
