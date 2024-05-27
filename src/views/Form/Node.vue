<template>
    <component :is="components[node.type_id - 1].component" :node="node" :prependOrderNumber="prependOrderNumber"
        :validateFormTimes="validateFormTimes">
    </component>
</template>

<script>
import { shallowRef } from "vue";
import Checkbox from "./Checkbox.vue";
import MultipleChoiceGrid from "./MultipleChoiceGrid.vue";
import MultipleChoiceGrid2 from "./MultipleChoiceGrid2.vue";
import MultipleChoiceGrid3 from "./MultipleChoiceGrid3.vue";
import Paragraph from "./Paragraph.vue";
import Radio from "./Radio.vue";
import Section from "./Section.vue";
import Select from "./Select.vue";
import ShortAnswer from "./ShortAnswer.vue";

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
                { id: 1, component: shallowRef(Checkbox) },
                { id: 2, component: shallowRef(MultipleChoiceGrid) },
                { id: 3, component: shallowRef(Paragraph) },
                { id: 4, component: shallowRef(Radio) },
                { id: 5, component: shallowRef(Select) },
                { id: 6, component: shallowRef(ShortAnswer) },
                { id: 7, component: shallowRef(Section) },
                { id: 8, component: shallowRef(MultipleChoiceGrid2) },
                { id: 9, component: shallowRef(MultipleChoiceGrid3) },
            ],
        };
    },
};
</script>
