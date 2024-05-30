<template>
    <component :is="targetComponent.component" :node="node" :prependOrderNumber="prependOrderNumber"
        :validateFormTimes="validateFormTimes">
    </component>
</template>

<script>
import { shallowRef } from "vue";
import Checkbox from "./Checkbox.vue";
import Paragraph from "./Paragraph.vue";
import Radio from "./Radio.vue";
import Section from "./Section.vue";
import Select from "./Select.vue";
import ShortAnswer from "./ShortAnswer.vue";
import MultipleChoiceGridHorizontal from "./MultipleChoiceGridHorizontal.vue";
import MultipleChoiceGridVertical from "./MultipleChoiceGridVertical.vue";
import MultipleChoiceGridDesktop from "./MultipleChoiceGridDesktop.vue";

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
            return this.components.find((component) => component.id === this.node.type_id);
        },
    }
};
</script>
