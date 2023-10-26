<script setup>
import { ref } from "vue";
import { useDisplay } from 'vuetify';

const props = defineProps({
    my_cards: Array,
});

const { mobile } = useDisplay();
const isShowedDialog = ref(false);
const selectedExperience = ref({});

function show(card) {
    isShowedDialog.value = true;
    selectedExperience.value = card;
}
</script>

<script>
export default {
    methods: {
        changeScrollDirections(event) {
            event.preventDefault();
            const delta = event.deltaY;
            const scrollContainer = this.$refs.info.$el; // 使用 $el 來獲取 DOM 元素
            if (scrollContainer) {
                scrollContainer.scrollBy({
                    left: delta,
                });
            }
        },
    },
};
</script>

<template>
    <v-container style="max-width: 1280px;">
        <v-row ref="info" class="flex-nowrap overflow-x-auto hide-scrollbar mt-15 justify-start"
            @wheel="changeScrollDirections">
            <v-col v-for="card in props.my_cards" :key="card.title">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card class="mx-auto pa-5 rounded-xl" max-width="344" width="23rem" height="35rem" v-bind="props">
                        <v-img :src="card.img_path" aspect-ratio="1" height="15rem" class="ma-15 elevation"></v-img>
                        <v-card-title class="text-h5 text-primary text-wrap" style="line-height: 1.5">
                            {{ card.unit }}
                        </v-card-title>
                        <v-card-subtitle class="text-h5 text-primary text-wrap" style="line-height: 1.5">
                            {{ card.title }}
                        </v-card-subtitle>
                        <v-overlay :model-value="isHovering" contained scrim="#7986CB" class="align-center justify-center">
                            <v-btn color="success" @click="show(card)">See more info</v-btn>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>

    <v-dialog v-model="isShowedDialog" transition="dialog-top-transition" persistent>
        <v-card :width="mobile ? '80vw' : '50vw'" class="ma-auto pa-5 rounded-lg" style="max-width: 720px;">
            <v-card-text class="text-h5 h-75">
                {{ selectedExperience.content }}
                <a v-if="selectedExperience.link" :href="selectedExperience.link">{{ selectedExperience.link }}</a>
            </v-card-text>
            <v-card-action class="d-flex justify-center">
                <v-btn size="x-large" rounded="xl" color="primary" @click="isShowedDialog = false">close</v-btn>
            </v-card-action>
        </v-card>
    </v-dialog>
</template>
