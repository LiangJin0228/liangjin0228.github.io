<template>
    <v-sheet class="ma-auto" max-width="1280px">
        <v-fab @click="handleScrollTo()" icon color="primary" absolute class="me-4" offset>
            <v-icon class="text-white">mdi-arrow-up</v-icon>
        </v-fab>
    </v-sheet>
</template>

<script setup>
import { handleScrollTo } from "@/assets/scripts/helpers.js"
</script>
