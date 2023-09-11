<script setup>
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay()
</script>

<template>
  <v-container fluid>
    <section>
      <v-img src="../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg"></v-img>
    </section>

    <section class="my-10">
      <v-row justify="center" align="center">

        <v-col :cols="mobile ? '8' : '3'">
          <v-card class="rounded-lg">
            <v-card-title>Tan Liang Jin</v-card-title>
            <v-card-subtitle>Full-Stack Developer</v-card-subtitle>
            <v-card-text>Hi, I'm a full-stack developer who loves deep thinking and programming. I'm a problem solver and
              enjoy turning concepts into real-world applications. My mobility and creativity allow me to constantly
              improve and provide value to my team.</v-card-text>
          </v-card>
        </v-col>

        <v-col :cols="mobile ? '4' : '2'">
          <v-card class="rounded-xl" :height="!mobile ? '12rem' : ''">
            <v-img src="../assets/myPhoto.jpg" class="ma-auto"></v-img>
          </v-card>
        </v-col>

      </v-row>
    </section>
  </v-container>
</template>
