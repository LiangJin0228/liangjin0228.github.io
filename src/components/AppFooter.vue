<template>
  <v-footer>
    <v-container>
      <v-row justify="center">
        <v-btn v-for="page in pages" :key="page.title" color="white" variant="text" class="mx-2" rounded="xl"
          :to="page.link">{{ page.title }}</v-btn>
      </v-row>
      <v-row justify="center">
        <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" target="_blank"
          :href="media.link" variant="text"></v-btn>
      </v-row>
      <v-row justify="center" class="text-center">
        <strong>
          All contents of this site, unless otherwise noted, are
          <v-icon size="small">mdi-copyright</v-icon> 2000-{{ new Date().getFullYear() }} Tan Liang Jin. All
          Rights Reserved.
        </strong>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Home",
          link: "/Home",
        },
        {
          title: "Resume",
          link: "/Resume",
        },
        {
          title: "Contact Me",
          link: "/Contact",
        },
      ],
      socialMedias: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/liangjin0228",
        },
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/TanLiangJin0228",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/liangjin0228",
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/jins.photo/",
        },
      ],
    }
  },
}
</script>