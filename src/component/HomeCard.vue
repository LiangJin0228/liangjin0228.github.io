<template>
    <v-hover>
        <template #default="{ isHovering, props }">
            <v-card v-bind="props" class="rounded-xl" min-width="19rem" width="19rem" height="35rem">
                <v-img :src="experience.img" aspect-ratio="1" height="20rem" class="ma-15 elevation"></v-img>
                <v-card-title class="text-center text-wrap">{{ experience.org }}</v-card-title>
                <v-card-subtitle class="text-center text-wrap">{{ experience.title }}</v-card-subtitle>

                <v-overlay :model-value="isHovering" contained persistent scrim="green-lighten-3"
                    class="align-center justify-center">
                    <v-btn color="success" rounded="xl" @click="isShowDetails = true">See more info</v-btn>
                </v-overlay>
            </v-card>
        </template>
    </v-hover>

    <v-dialog v-model="isShowDetails" transition="dialog-top-transition" persistent>
        <v-card class="ma-auto rounded-xl" width="50vw">
            <v-card-title class="text-wrap">{{ experience.content }}</v-card-title>
            <v-card-text v-if="experience.link">
                <a :href="experience.link" target="_blank" class="text-green-darken-4" style="text-decoration: none;">{{
                    experience.link }}</a>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn size="large" variant="outlined" rounded="xl" color="green"
                    @click="isShowDetails = false">close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        experience: Object,
    },
    data() {
        return {
            isShowDetails: false,
        };
    },
};
</script>
