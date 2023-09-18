<script setup>
import { ref } from "vue";
import { useDisplay } from 'vuetify';

const props = defineProps({
    experiences: Array,
});

const { mobile } = useDisplay();
const isShowedDialog = ref(false);
const selectedExperience = ref({});

function show(experience) {
    isShowedDialog.value = true;
    selectedExperience.value = experience;
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
            <v-col v-for="experience in props.experiences" :key="experience.title">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card class="mx-auto pa-5 rounded-xl" max-width="344" width="23rem" height="35rem" v-bind="props">
                        <v-img :src="experience.img_path" aspect-ratio="1" height="15rem" class="ma-15 elevation"></v-img>
                        <v-card-title class="text-h5 text-primary text-wrap" style="line-height: 1.5">
                            {{ experience.unit }}
                        </v-card-title>
                        <v-card-subtitle class="text-h5 text-primary text-wrap" style="line-height: 1.5">
                            {{ experience.title }}
                        </v-card-subtitle>
                        <v-overlay :model-value="isHovering" contained scrim="#7986CB" class="align-center justify-center">
                            <v-btn class="bg-green-lighten-1" @click="show(experience)">See more info</v-btn>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
    <v-dialog v-model="isShowedDialog" transition="dialog-top-transition" persistent>
        <v-card :width="mobile ? '80vw' : '50vw'" class="ma-auto rounded-lg" style="max-width: 720px;">
            <v-card-text class="text-h5 h-75">
                {{ selectedExperience.content }}
                <a v-if="selectedExperience.link" :href="selectedExperience.link">{{ selectedExperience.link }}</a>
            </v-card-text>

            <v-btn class="bg-green-lighten-1" @click="isShowedDialog = false">close</v-btn>
        </v-card>
    </v-dialog>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>