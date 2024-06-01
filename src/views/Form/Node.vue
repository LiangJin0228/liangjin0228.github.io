<template>
    <component ref="node" :is="targetComponent.component" :node="node"></component>
</template>

<script>
import { shallowRef } from "vue";
import Checkbox from "./Questions/Checkbox.vue";
import Paragraph from "./Questions/Paragraph.vue";
import Radio from "./Questions/Radio.vue";
import Section from "./Section.vue";
import Select from "./Questions/Select.vue";
import ShortAnswer from "./Questions/ShortAnswer.vue";
import MultipleChoiceGridHorizontal from "./Questions/MultipleChoiceGridHorizontal.vue";
import MultipleChoiceGridVertical from "./Questions/MultipleChoiceGridVertical.vue";
import MultipleChoiceGridDesktop from "./Questions/MultipleChoiceGridDesktop.vue";

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
    data() {
        return {
            components: [
                { id: 1, component: shallowRef(ShortAnswer) },
                { id: 2, component: shallowRef(Paragraph) },
                { id: 3, component: shallowRef(Select) },
                { id: 4, component: shallowRef(Radio) },
                { id: 5, component: shallowRef(Checkbox) },
                { id: 6, component: shallowRef(MultipleChoiceGridHorizontal) },
                { id: 7, component: shallowRef(MultipleChoiceGridVertical) },
                { id: 8, component: shallowRef(MultipleChoiceGridDesktop) },
                { id: 9, component: shallowRef(Section) },
            ],
        };
    },
    computed: {
        targetComponent() {
            return this.components.find(
                (component) => component.id === this.node.type_id
            );
        },
    },
};
</script>
