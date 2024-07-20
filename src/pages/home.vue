<template>
    <v-app-bar :color="themeStatus.global.current.dark ? 'black' : 'white'" :elevation="6" order="1"
        style="position: fixed; opacity: 0.9;" scroll-behavior="hide elevate inverted"
        :scroll-threshold="!smAndDown ? innerHeight * 1.3 - 64 : innerHeight * 2 - 64">
        <template v-if="!smAndDown">
            <v-container class="d-flex justify-space-between align-center" style="max-width: 1280px">
                <v-menu open-on-hover>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" @click="handleScrollTo()">
                            <v-icon size="x-large">mdi-menu</v-icon> &nbsp; Home
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="handleScrollTo('about-me')">
                            <v-list-item-title>About Me</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleScrollTo('experiences')">
                            <v-list-item-title>Experiences</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleScrollTo('educations')">
                            <v-list-item-title>Academic Background</v-list-item-title>
                        </v-list-item>
                        <!-- <v-list-item @click="handleScrollTo('projects')">
                            <v-list-item-title>Projects</v-list-item-title>
                        </v-list-item> -->
                    </v-list>
                </v-menu>
                <v-btn to="/Resume">Resume</v-btn>
                <v-btn to="/Contact">Contact Me</v-btn>
                <v-switch inset hide-details v-model="isLightTheme" true-icon="mdi-white-balance-sunny"
                    false-icon="mdi-power-sleep" @update:modelValue="toggleTheme" class="px-4"></v-switch>
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
            <v-list-item @click="handleScrollTo('top')">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('about-me')">
                <v-list-item-title>About Me</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('experiences')">
                <v-list-item-title>Experiences</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('educations')">
                <v-list-item-title>Academic Background</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item @click="handleScrollTo('projects')">
                <v-list-item-title>Projects</v-list-item-title>
            </v-list-item> -->
            <v-list-item to="/Resume">
                <v-list-item-title>Resume</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Contact">
                <v-list-item-title>Contact Me</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main>
        <v-sheet class="video-container" :height="!smAndDown ? '130vh' : '200vh'">
            <video style="object-fit: cover;height: 100vh;width: 100vw;position: fixed;z-index: 0;" preload="auto" muted
                autoplay loop poster="/poster.png">
                <source src="/infinity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <v-container :style="{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${homeScale})`,
            }">
                <div class="ma-auto" style="width: fit-content; max-width: 63vw">
                    <p class="text-h1 text-white font-weight-black mb-2">Hej!</p>
                    <p class="text-h5 text-white">
                        I'm
                        <span class="font-weight-black text-pink-lighten-3">
                            Full-stack
                            <span class="cursor-pointer" @click="handleScrollTo('about-me')">{developer}</span>
                        </span>
                        passionate about creating
                        <span class="font-weight-black text-pink-lighten-3">efficient</span>
                        and
                        <span class="font-weight-black text-pink-lighten-3">accessible</span>
                        digital solutions.
                    </p>
                </div>
            </v-container>
            <v-container class="text-center" :style="{
                position: 'fixed',
                top: '95%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
            }">
                <v-btn class="floating-wihtout-shadow" @click="handleScrollTo('about-me')" color="white" variant="text"
                    icon="mdi-arrow-down"></v-btn>
            </v-container>
        </v-sheet>

        <BaseComponent baseId="about-me">
            <v-row>
                <v-col class="d-flex justify-center">
                    <div class="fade-in">
                        <h3 class="text-h3 text-center font-weight-bold"
                            :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'">
                            About Me
                        </h3>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center mb-5">
                    <i class="text-subtitle-1 text-center text-grey fade-in">
                        <b class="text-primary font-weight-bold">Malaysian</b>
                        working as an engineer in
                        <b class="text-primary font-weight-bold">Taiwan</b>.
                    </i>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-card flat color="transparent">
                        <v-card-title class="text-h4 text-wrap fade-in">
                            Liang Jin <span class="text-primary">Tan</span>(陳亮憬)
                        </v-card-title>
                        <v-card-text class="text-subtitle-1">
                            <div class="fade-in">
                                From Malaysia to Taiwan, I am a full-stack developer passionate about technology and
                                problem-solving, with a broad expertise spanning front-end to back-end development. My
                                skills are rooted in a diverse programming background.
                                <br><br>
                            </div>
                            <div class="fade-in">
                                I value the quality of my code and focus on honing my skills in system architecture
                                design and writing algorithms to solve different problems through various Design
                                Patterns.
                                <br><br>
                            </div>
                            <div class="fade-in">
                                The "CPAS Talent Diagnostic Report" underscores my strengths in innovation,
                                independence, and analytical thinking, essential for addressing the tech industry's
                                challenges with confidence.
                                <br><br>
                            </div>
                            <div class="fade-in">
                                <v-btn size="large" color="primary" @click="handleScrollTo('experiences')">
                                    My Experiences
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card flat color="transparent">
                        <v-card-title class="text-h4 text-wrap fade-in">My toolkit</v-card-title>
                        <v-card-text class="d-flex flex-wrap">
                            <div v-for="toolkit in toolkits" :key="toolkit" class="fade-in" @mousedown.prevent>
                                <v-chip size="x-large" rounded="0" class="ma-1 text-subtitle-1 rounded-lg">
                                    {{ toolkit }}
                                </v-chip>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </BaseComponent>

        <BaseComponent baseId="experiences">
            <v-row>
                <v-col class="d-flex justify-center">
                    <div class="fade-in">
                        <h3 class="text-h3 text-center font-weight-bold"
                            :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'">
                            Experiences
                        </h3>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" class="d-flex justify-start align-end">
                    <v-card flat class="bg-transparent">
                        <v-card-title class="text-h4 text-start text-wrap fade-in">Full-stack developer</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" class="d-flex justify-end align-end">
                    <v-card flat class="bg-transparent">
                        <v-card-title class="text-subtitle-1 text-end text-wrap text-grey fade-in">
                            National Taiwan Normal University
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col id="ntnu-banner" :style="`transform: scale(${ntnuBannerScale});`">
                    <div class="fade-in">
                        <v-container fluid>
                            <v-card flat href="https://www.ntnu.edu.tw/" target="_blank"
                                class="bg-white rounded-xl d-flex pa-5 px-16">
                                <v-container>
                                    <v-img width="50%" src="/ntnu-banner.png" class="ma-auto"></v-img>
                                </v-container>
                            </v-card>
                        </v-container>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-container :class="{ 'pt-16': smAndUp }">
                        <div class="fade-in my-10">
                            <h4 class="text-h4 text-end text-wrap fade-in">Dev Tools</h4>
                        </div>
                        <Laravel />
                        <PHP />
                        <linux />
                        <Git />
                        <Nginx />
                    </v-container>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-container>
                        <Vue />
                        <Vuetify />
                        <ChartJs />
                        <Jquery />
                        <Docker />
                    </v-container>
                </v-col>
            </v-row>
        </BaseComponent>

        <v-sheet id="educations" min-height="100vh" class="cursor-default">
            <v-card flat width="100vw" min-width="100vw" min-height="100vh"
                class="d-flex flex-column align-center rounded-0 text-black">
                <div style="width: 100vw; min-height: 10vh;" class="d-flex"
                    :class="isLightTheme ? 'educations-container-light' : 'educations-container-dark'">
                    <v-container style="max-width: 1280px; min-height: 10vh;">
                        <v-row>
                            <v-col class="d-flex justify-center">
                                <h3 class="mt-16 text-h3 text-center font-weight-bold"
                                    :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'">
                                    Academic Background
                                </h3>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <div style="width: 100vw; min-height: 90vh;" class="d-flex"
                    :class="isLightTheme ? 'educations-container-gradient-light' : 'educations-container-gradient-dark'">
                    <v-container style="max-width: 1280px; min-height: 90vh;">
                        <CsieNtust />
                        <CsimNtust />
                        <FoonYew />
                    </v-container>
                </div>
            </v-card>
        </v-sheet>
        <v-fab @click="handleScrollTo()" class="me-4" icon="mdi-arrow-up" location="top end" absolute offset></v-fab>
    </v-main>
</template>

<script setup>
import BaseComponent from "@/components/BaseComponent.vue"
import ChartJs from "@/components/Home/ChartJs.vue"
import CsieNtust from "@/components/Home/CsieNtust.vue"
import CsimNtust from "@/components/Home/CsimNtust.vue"
import Docker from "@/components/Home/Docker.vue"
import FoonYew from "@/components/Home/FoonYew.vue"
import Git from "@/components/Home/Git.vue"
import Jquery from "@/components/Home/Jquery.vue"
import Laravel from "@/components/Home/Laravel.vue"
import Linux from "@/components/Home/Linux.vue"
import Nginx from "@/components/Home/Nginx.vue"
import PHP from "@/components/Home/PHP.vue"
import Vue from "@/components/Home/Vue.vue"
import Vuetify from "@/components/Home/Vuetify.vue"

import { reactive, ref } from "vue"
import { useDisplay, useTheme } from "vuetify"

import { handleScrollTo } from "@/assets/scripts/home.js"
import '@/assets/styles/home.scss'

const { smAndDown, smAndUp } = useDisplay()
const theme = useTheme()
const themeStatus = reactive({ ...theme })
const isLightTheme = themeStatus.global.current.dark ? ref(false) : ref(true)
const innerHeight = window.innerHeight
const drawer = ref(false)
const toolkits = ["Docker", "Git", "Linux", "Nginx", "Vite", "Webpack", "PHP", "Java", "Python", "C#", "JavaScript", "CSS", "HTML", "SQL", "Laravel", "PHP Unit", "Vue", "Vuetify", "jQuery", "ChartJS", "Ajax", "RWD", "Google Apps Script", "HCL Domino/Notes/Volt"]
const homeScale = ref(1)
const ntnuBannerScale = ref(1.5)

function toggleTheme() {
    theme.global.name.value = isLightTheme.value ? 'light' : 'custom'
}

document.addEventListener("scroll", async function () {
    homeScale.value = Math.min(1 + window.scrollY * 0.0006, 1.4)

    const ntnuBanner = document.getElementById("ntnu-banner")
    if (ntnuBanner) {
        const rect = ntnuBanner.getBoundingClientRect()
        ntnuBannerScale.value = Math.min(Math.max((rect.top + ntnuBanner.clientHeight + 64) / window.innerHeight * 1.8, 1), 1.5)
    }

    const elements = document.querySelectorAll(".fade-in")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const position = element.getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            if (!element.classList.contains("fade-in-active")) {
                await new Promise((resolve) => setTimeout(resolve, 30))
                element.classList.add("fade-in-active")
            }
        } else {
            if (element.classList.contains("fade-in-active")) {
                element.classList.remove("fade-in-active")
            }
        }
    }
})
</script>