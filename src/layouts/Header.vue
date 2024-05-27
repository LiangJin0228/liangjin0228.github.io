<template>
    <v-app-bar>
        <v-container class="d-flex justify-center">
            <v-btn-toggle v-model="pageTitle">
                <v-btn v-for="button in buttons" :key="button.value" rounded="xl" :class="button.class"
                    :value="button.value" :to="button.to">
                    <v-icon :icon="button.icon" />
                    <span>{{ button.text }}</span>
                </v-btn>
            </v-btn-toggle>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            pageTitle: "",
            buttons: [
                {
                    value: "index",
                    text: "Home",
                    icon: "mdi-home",
                    class: "text-green",
                    to: "/index",
                },
                {
                    value: "resume",
                    text: "Resume",
                    icon: "mdi-file-account",
                    class: "text-brown-darken-1",
                    to: "/resume",
                },
                {
                    value: "about",
                    text: "About Me",
                    icon: "mdi-information",
                    class: "text-blue",
                    to: "/about",
                },
                {
                    value: "contact",
                    text: "Contact Me",
                    icon: "mdi-phone-incoming",
                    class: "text-yellow-darken-4",
                    to: "/contact",
                },
            ],
        };
    },
};
</script>
