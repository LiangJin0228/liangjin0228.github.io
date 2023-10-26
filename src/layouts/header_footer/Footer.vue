<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/liangjin0228/'
    },
    {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/TanLiangJin0228'
    },
    {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/liangjin0228/'
    },
    {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/liangjin_tan'
    },
])
</script>


<template>
    <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">Home</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/resume">Resume</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/about">About Me</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/contact">Contact Me</v-btn>


            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text"></v-btn>
            </v-col>


            <v-col class="text-center mt-4" cols="12">
                <strong>All contents of this site, unless otherwise noted, are ©2000-{{ new Date().getFullYear() }} Tan
                    Liang Jin. All Rights Reserved.</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>