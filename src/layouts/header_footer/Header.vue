<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const route = useRoute();

const path = computed(() => route.path.replace("/", ""));
const pageTitle = ref("");

const { smAndDown } = useDisplay();

onMounted(() => {
  pageTitle.value = path.value;
});

const buttons = [
  {
    value: 'index',
    text: 'Home',
    icon: 'mdi-home',
    textClass: 'text-green',
    to: '/index',
  },
  {
    value: 'resume',
    text: 'Resume',
    icon: 'mdi-file-account',
    textClass: 'text-brown-darken-1',
    to: '/resume',
  },
  {
    value: 'about',
    text: 'About Me',
    icon: 'mdi-information',
    textClass: 'text-blue',
    to: '/about',
  },
  {
    value: 'contact',
    text: 'Contact Me',
    icon: 'mdi-phone-incoming',
    textClass: 'text-yellow-darken-4',
    to: '/contact',
  },
];
</script>

<template>
  <v-app-bar app :scroll-behavior="pageTitle == 'index' ? 'hide inverted' : 'none'">
    <v-container fluid class="d-flex justify-center">
      <v-btn-toggle v-model="pageTitle">
        <v-btn v-for="  button   in   buttons  " :key="button.value" rounded="xl"
          :size="smAndDown ? 'x-large' : 'large'" :class="button.textClass" :value="button.value" :to="button.to">
          <v-icon :icon="button.icon" :size="smAndDown ? 'x-large' : 'large'" />
          <span v-if="!smAndDown">{{ button.text }}</span>
        </v-btn>
      </v-btn-toggle>
    </v-container>
  </v-app-bar>
</template>
