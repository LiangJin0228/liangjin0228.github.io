<template>
    <v-app-bar :color="themeStatus.global.current.dark ? 'black' : 'white'" :elevation="6" order="1"
        style="position: fixed; opacity: 0.9;">
        <template v-if="!smAndDown">
            <v-container class="d-flex justify-space-between align-center" style="max-width: 1280px">
                <slot name="desktop">
                    <v-btn to="/Home"><v-icon size="x-large">mdi-menu</v-icon> &nbsp; Home</v-btn>
                    <v-btn to="/Resume">Resume</v-btn>
                    <v-btn to="/Contact">Contact Me</v-btn>
                    <v-switch inset hide-details v-model="isLightTheme" true-icon="mdi-white-balance-sunny"
                        false-icon="mdi-power-sleep" @update:modelValue="toggleTheme" class="px-4"></v-switch>
                </slot>
            </v-container>
        </template>
        <template v-else>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>

    <v-navigation-drawer width="200" v-if="smAndDown" v-model="drawer" location="right" style="position: fixed">
        <v-list>
            <v-list-item>
                <v-container fluid class="pa-0 d-flex">
                    <v-switch inset hide-details v-model="isLightTheme" true-icon="mdi-white-balance-sunny"
                        false-icon="mdi-power-sleep" @update:modelValue="toggleTheme"></v-switch>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" icon="mdi-close" @click="drawer = false"></v-btn>
                </v-container>
            </v-list-item>
            <v-list-item to="/Home">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Resume">
                <v-list-item-title>Resume</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Contact">
                <v-list-item-title>Contact Me</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useDisplay, useTheme } from "vuetify"

const { smAndDown } = useDisplay()
const theme = useTheme()
const themeStatus = reactive({ ...theme })
const isLightTheme = themeStatus.global.current.dark ? ref(false) : ref(true)
const innerHeight = window.innerHeight
const drawer = ref(false)

function toggleTheme() {
    theme.global.name.value = isLightTheme.value ? 'light' : 'custom'
}
</script>