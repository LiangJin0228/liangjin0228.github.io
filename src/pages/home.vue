<template>
  <v-app-bar
    :color="themeStatus.global.current.dark ? 'black' : 'white'"
    :elevation="6"
    order="1"
    scroll-behavior="hide elevate inverted"
    :scroll-threshold="!smAndDown ? innerHeight * 1.3 - 64 : innerHeight * 2 - 64"
    style="position: fixed; opacity: 0.9;"
  >
    <template v-if="!smAndDown">
      <v-container class="d-flex justify-space-between align-center" style="max-width: 1280px">
        <v-menu v-model="menu" open-on-hover>
          <template #activator="{ props }">
            <v-btn v-bind="props" @click="() => { handleScrollTo(); menu = false; }">
              <v-icon size="x-large">mdi-menu</v-icon> &nbsp; Home
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="handleScrollTo('about-me')">
              <v-list-item-title class="text-wrap">About Me</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('experiences')">
              <v-list-item-title class="text-wrap">Experiences</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('projects')">
              <v-list-item-title class="text-wrap">Projects</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('educations')">
              <v-list-item-title class="text-wrap">Academic Background</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn to="/Resume">Resume</v-btn>
        <v-btn to="/Contact">Contact Me</v-btn>
        <v-switch
          v-model="isLightTheme"
          class="px-4"
          false-icon="mdi-power-sleep"
          hide-details
          inset
          true-icon="mdi-white-balance-sunny"
          @update:model-value="toggleTheme"
        />
      </v-container>
    </template>
    <template v-else>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = true" />
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-if="smAndDown"
    v-model="drawer"
    location="right"
    style="position: fixed"
    width="200"
  >
    <v-list>
      <v-list-item>
        <v-container class="pa-0 d-flex" fluid>
          <v-switch
            v-model="isLightTheme"
            false-icon="mdi-power-sleep"
            hide-details
            inset
            true-icon="mdi-white-balance-sunny"
            @update:model-value="toggleTheme"
          />
          <v-spacer />
          <v-btn icon="mdi-close" variant="text" @click="drawer = false" />
        </v-container>
      </v-list-item>
      <v-list-item @click="handleScrollTo('top')">
        <v-list-item-title class="text-wrap">Home</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleScrollTo('about-me')">
        <v-list-item-title class="text-wrap">About Me</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleScrollTo('experiences')">
        <v-list-item-title class="text-wrap">Experiences</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleScrollTo('projects')">
        <v-list-item-title class="text-wrap">Projects</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleScrollTo('educations')">
        <v-list-item-title class="text-wrap">Academic Background</v-list-item-title>
      </v-list-item>
      <v-list-item to="/Resume">
        <v-list-item-title class="text-wrap">Resume</v-list-item-title>
      </v-list-item>
      <v-list-item to="/Contact">
        <v-list-item-title class="text-wrap">Contact Me</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <Loading :loading="loading" />
    <v-sheet class="video-container" :height="!smAndDown ? '130vh' : '200vh'">
      <video
        v-if="infinityVideo != null"
        autoplay
        loop
        muted
        style="object-fit: cover;height: 100vh;width: 100vw;position: fixed;z-index: 0;"
      >
        <source :src="infinityVideo" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <v-container
        :style="{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${homeScale})` }"
      >
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
      <v-container
        class="text-center"
        :style="{
          position: 'fixed',
          top: '95%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
        }"
      >
        <v-btn
          class="floating-wihtout-shadow"
          color="white"
          icon="mdi-arrow-down"
          variant="text"
          @click="handleScrollTo('about-me')"
        />
      </v-container>
    </v-sheet>

    <BaseComponent base-id="about-me">
      <v-row>
        <v-col class="d-flex justify-center">
          <div class="fade-in">
            <h3
              class="text-h3 text-center font-weight-bold"
              :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'"
            >
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
          <v-card color="transparent" flat>
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
                <v-btn color="primary" size="large" @click="handleScrollTo('experiences')">
                  My Experiences
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card color="transparent" flat>
            <v-card-title class="text-h4 text-wrap fade-in">My toolkit</v-card-title>
            <v-card-text class="d-flex flex-wrap">
              <div v-for="toolkit in toolkits" :key="toolkit" class="fade-in" @mousedown.prevent>
                <v-chip class="ma-1 text-subtitle-1 rounded-lg" rounded="0" size="x-large">
                  {{ toolkit }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </BaseComponent>

    <BaseComponent base-id="experiences">
      <v-row>
        <v-col class="d-flex justify-center">
          <div class="fade-in">
            <h3
              class="text-h3 text-center font-weight-bold"
              :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'"
            >
              Experiences
            </h3>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-start align-end" cols="12" sm="6">
          <v-card class="bg-transparent" flat>
            <v-card-title class="text-h4 text-start text-wrap fade-in">Full-stack developer</v-card-title>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-end align-end" cols="12" sm="6">
          <v-card class="bg-transparent" flat>
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
              <v-card
                class="bg-white rounded-xl d-flex pa-5 px-16"
                flat
                href="https://www.ntnu.edu.tw/"
                target="_blank"
              >
                <v-container>
                  <v-img class="ma-auto" src="/ntnu-banner.png" width="50%" />
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

    <v-sheet id="projects" class="cursor-default" min-height="50vh">
      <v-card
        class="d-flex align-center rounded-0 text-white"
        flat
        min-height="50vh"
        min-width="100vw"
        width="100vw"
      >
        <video
          v-if="projectsBgVideo != null"
          autoplay
          loop
          muted
          style="position: absolute; top: 0; left: 0; object-fit: cover;height: 100%;width: 100vw;"
        >
          <source :src="projectsBgVideo" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <v-container style="max-width: 1280px; min-height: 10vh;">
          <v-row>
            <v-col class="d-flex justify-center">
              <h3
                class="mt-16 text-h3 text-center font-weight-bold"
                :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'"
              >
                Projects
              </h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-carousel
                continuous
                cycle
                height="100%"
                hide-delimiters
                interval="3000"
                :show-arrows="smAndDown ? false : 'hover'"
              >
                <v-carousel-item>
                  <v-sheet
                    class="d-flex justify-center align-center"
                    height="100%"
                    style="background-color: transparent;"
                  >
                    <v-card
                      class="ma-1 my-10 pt-5 text-white"
                      :height="smAndDown ? 'undefined' : '700'"
                      href="https://teacher.edu.tw/tted/web"
                      rounded="xl"
                      style="backdrop-filter: blur(20px); background-color: rgba(0, 0, 0, 0.1)"
                      target="_blank"
                      :width="smAndDown ? '100%' : '50%'"
                    >
                      <v-img
                        class="ma-auto"
                        src="/edu_logo.png"
                        :width="smAndDown ? '150' : '300'"
                      />
                      <v-card-title class="text-wrap text-center">
                        National Pre-Service and <br> In-Service Teacher Integrated Database
                      </v-card-title>
                      <v-card-subtitle class="text-wrap text-center">Work In
                        NTNU</v-card-subtitle>
                      <v-card-text class="text-subtitle-1">
                        I am responsible for developing and maintaining the Ministry of
                        Education's K-12 Teacher Database system. I use Laravel and Vue.js with
                        Vuetify. My daily tasks focus on maintenance with some development.
                        Recently, I upgraded the project from Laravel 8 to 10 and migrated the
                        front end from Angular to Vue 2, now refactoring to Vue 3. I use WSL and
                        Docker for development, write unit tests for new features, and perform
                        code reviews to ensure code quality and team collaboration.
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-carousel-item>

                <v-carousel-item>
                  <v-sheet
                    class="d-flex justify-center align-center"
                    height="100%"
                    style="background-color: transparent;"
                  >
                    <v-card
                      class="ma-1 my-10 pt-5 text-white"
                      :height="smAndDown ? 'undefined' : '700'"
                      rounded="xl"
                      style="backdrop-filter: blur(20px); background-color: rgba(0, 0, 0, 0.1)"
                      :width="smAndDown ? '100%' : '50%'"
                    >
                      <v-container class="pa-0 d-flex justify-center align-center" fluid>
                        <v-avatar :size="smAndDown ? '150' : '300'">
                          <v-img src="/hololens_project.webp" />
                        </v-avatar>
                      </v-container>
                      <v-card-title class="text-wrap text-center">
                        Applying Hololens2 to <br> Pool Sports Assist System
                      </v-card-title>
                      <v-card-subtitle class="text-wrap text-center">
                        Award of Excellence in NTUST Intramural Project Competition
                      </v-card-subtitle>
                      <v-card-text class="text-subtitle-1">
                        This is a graduation project for the university, which helps to learn
                        how to play pool through MR (Mixed Reality), calculating the optimal
                        solution and drawing the path to hit the ball. <br> <br>
                        The main responsibility is to process the UWP establishment and deploy
                        to Hololens2, the language used in the development is C#, and the
                        platform is Unity with Microsoft's MRTK for development.
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-carousel-item>

                <v-carousel-item>
                  <v-sheet
                    class="d-flex justify-center align-center"
                    height="100%"
                    style="background-color: transparent;"
                  >
                    <v-card
                      class="ma-1 my-10 pt-5 text-white"
                      :height="smAndDown ? 'undefined' : '700'"
                      href="https://sites.google.com/view/2023-ntust-osgp/home"
                      rounded="xl"
                      style="backdrop-filter: blur(20px); background-color: rgba(0, 0, 0, 0.1)"
                      target="_blank"
                      :width="smAndDown ? '100%' : '50%'"
                    >
                      <v-container class="pa-0 d-flex justify-center align-center" fluid>
                        <v-avatar :size="smAndDown ? '150' : '300'">
                          <v-img src="/graduation.jpg" />
                        </v-avatar>
                      </v-container>
                      <v-card-title class="text-wrap text-center">
                        Overseas Student <br> Graduation Party Event Website
                      </v-card-title>
                      <v-card-subtitle class="text-wrap text-center">
                        Make good use of my profession
                      </v-card-subtitle>
                      <v-card-text class="text-subtitle-1">
                        During my college years, I served as vice president of the Overseas
                        Compatriot Students' Association, and created the information
                        department, using my professional knowledge to help the association
                        develop and maintain the association's website. <br> <br>
                        This website is the official website of the 2023 NTUST Overseas
                        Compatriot Graduation Party, using Google Apps Script with Google API
                        for development, and using Google Sites as the platform for website
                        publishing.
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-sheet>

    <v-sheet id="educations" class="cursor-default" min-height="100vh">
      <v-card
        class="d-flex flex-column align-center rounded-0"
        flat
        min-height="100vh"
        min-width="100vw"
        width="100vw"
      >
        <div
          class="d-flex"
          :class="isLightTheme ? 'educations-container-light' : 'educations-container-dark'"
          style="width: 100vw; min-height: 10vh;"
        >
          <v-container style="max-width: 1280px; min-height: 10vh;">
            <v-row>
              <v-col class="d-flex justify-center">
                <h3
                  class="mt-16 text-h3 text-center font-weight-bold"
                  :class="isLightTheme ? 'underline-shorter-light' : 'underline-shorter-dark'"
                >
                  Academic Background
                </h3>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div
          class="d-flex"
          :class="isLightTheme ? 'educations-container-gradient-light' : 'educations-container-gradient-dark'"
          style="width: 100vw; min-height: 90vh;"
        >
          <v-container style="max-width: 1280px; min-height: 90vh;">
            <CsieNtust />
            <CsimNtust />
            <FoonYew />
          </v-container>
        </div>
      </v-card>
    </v-sheet>

    <TopButton />
  </v-main>
</template>

<script setup>
  import axios from 'axios'
  import Loading from '@/components/Loading.vue'
  import BaseComponent from '@/components/BaseComponent.vue'
  import ChartJs from '@/components/Home/ChartJs.vue'
  import CsieNtust from '@/components/Home/CsieNtust.vue'
  import CsimNtust from '@/components/Home/CsimNtust.vue'
  import Docker from '@/components/Home/Docker.vue'
  import FoonYew from '@/components/Home/FoonYew.vue'
  import Git from '@/components/Home/Git.vue'
  import Jquery from '@/components/Home/Jquery.vue'
  import Laravel from '@/components/Home/Laravel.vue'
  import Linux from '@/components/Home/Linux.vue'
  import Nginx from '@/components/Home/Nginx.vue'
  import PHP from '@/components/Home/PHP.vue'
  import Vue from '@/components/Home/Vue.vue'
  import Vuetify from '@/components/Home/Vuetify.vue'
  import TopButton from '@/components/TopButton.vue'
  import { handleScrollTo } from '@/assets/scripts/helpers.js'
  import { onMounted, reactive, ref } from 'vue'
  import { useDisplay, useTheme } from 'vuetify'

  import '@/assets/styles/home.scss'

  const { smAndDown } = useDisplay()
  const { smAndUp } = useDisplay()
  const theme = useTheme()
  const themeStatus = reactive({ ...theme })
  const innerHeight = ref(window.innerHeight)
  const menu = ref(false)
  const drawer = ref(false)
  const toolkits = ['Docker', 'Git', 'Linux', 'Nginx', 'Vite', 'Webpack', 'PHP', 'Java', 'Python', 'C#', 'JavaScript', 'CSS', 'HTML', 'SQL', 'Laravel', 'PHP Unit', 'Vue', 'Vuetify', 'jQuery', 'ChartJS', 'Ajax', 'RWD', 'Google Apps Script', 'HCL Domino/Notes/Volt']
  const loading = ref(true)
  const infinityVideo = ref(null)
  const projectsBgVideo = ref(null)
  const isLightTheme = themeStatus.global.current.dark ? ref(false) : ref(true)
  const homeScale = ref(1)
  const ntnuBannerScale = ref(1.5)

  onMounted(() => {
    loadMainVideo()
    toggleProjectsBg()
  })

  function toggleTheme () {
    theme.global.name.value = isLightTheme.value ? 'light' : 'custom'
    toggleProjectsBg()
  }

  function loadMainVideo () {
    infinityVideo.value = null
    axios.get('/infinity.mp4', { responseType: 'blob' }).then(async response => {
      infinityVideo.value = URL.createObjectURL(response.data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      loading.value = false
    }).catch(error => {
      if (error.code === 'ERR_NETWORK') {
        loadMainVideo()
      }
    })
  }

  function toggleProjectsBg () {
    projectsBgVideo.value = null
    const darkOrLightVideo = isLightTheme.value ? '/ocean.mp4' : '/dark.mp4'
    axios.get(darkOrLightVideo, { responseType: 'blob' }).then(response => {
      projectsBgVideo.value = URL.createObjectURL(response.data)
    }).catch(error => {
      if (error.code === 'ERR_NETWORK') {
        toggleProjectsBg()
      }
    })
  }

  document.addEventListener('scroll', async function () {
    const ntnuBanner = document.getElementById('ntnu-banner')
    const elements = document.querySelectorAll('.fade-in')
    homeScale.value = Math.min(1 + window.scrollY * 0.0006, 1.4)

    if (ntnuBanner) {
      const rect = ntnuBanner.getBoundingClientRect()
      ntnuBannerScale.value = Math.min(Math.max((rect.top + ntnuBanner.clientHeight + 128) / window.innerHeight * 1.8, 1), 1.5)
    }

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const position = element.getBoundingClientRect()

      if (position.top < window.innerHeight && position.bottom >= 0) {
        if (!element.classList.contains('fade-in-active')) {
          await new Promise(resolve => setTimeout(resolve, 30))
          element.classList.add('fade-in-active')
        }
      } else {
        if (element.classList.contains('fade-in-active')) {
          element.classList.remove('fade-in-active')
        }
      }
    }
  })
</script>
