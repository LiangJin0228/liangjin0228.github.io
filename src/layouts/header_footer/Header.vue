<script setup>

</script>

<template>
    <v-app-bar flat :elevation="5">
        <v-app-bar-nav-icon>
            <v-icon icon="mdi-human-greeting" color="green-darken-4" />
        </v-app-bar-nav-icon>
        <v-app-bar-title class="text-deep-purple-lighten-2">
            Welcome!
        </v-app-bar-title>

        <v-btn rounded="xl" size="large" prepend-icon="mdi-home" class="text-green" value="" to="/">Home</v-btn>
        <v-btn rounded="xl" size="large" prepend-icon="mdi-file-account" class="text-brown-darken-1" value="resume"
            to="/resume">Resume</v-btn>
        <v-btn rounded="xl" size="large" prepend-icon="mdi-information" class="text-blue" value="about" to="/about">About
            Me</v-btn>
        <v-btn rounded="xl" size="large" prepend-icon="mdi-phone-incoming" class="text-yellow-darken-4" value="contact"
            to="/contact">Contact Me</v-btn>

        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>