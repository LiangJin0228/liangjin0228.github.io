<template>
    <v-row>
        <v-col cols="12" sm="6" class="d-flex justify-start align-end">
            <v-card flat class="bg-transparent">
                <v-card-title class="text-h4 text-start text-wrap">
                    Department of Computer Science and Information Engineering
                </v-card-title>
                <v-card-subtitle class="text-subtitle-1 text-start text-wrap">
                    Postgraduate student
                </v-card-subtitle>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-end align-end">
            <v-card flat class="bg-transparent">
                <v-card-title class="text-subtitle-1 text-end text-wrap text-grey">
                    National Taiwan University of Science and Technology
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-container fluid>
                <v-card hover rounded="xl" class="bg-transparent pa-5">
                    <v-row>
                        <v-col v-if="smAndDown" class="pa-16">
                            <v-img class="ma-auto" width="300" src="/csie.png"></v-img>
                        </v-col>
                        <v-col>
                            <v-card flat class="bg-transparent fill-height d-flex flex-column">
                                <v-card-title class="text-h5">
                                    2024/9 ~ 2026/7
                                </v-card-title>
                                <v-card-text class="text-subtitle-1">
                                    The main objective of CSIE department is to train students with equal emphasis on
                                    theory and practice of computer science and information engineering. Major research
                                    areas include multimedia network, artificial intelligence, and
                                    information security.
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn href="https://www.csie.ntust.edu.tw/" target="_blank" stacked width="300"
                                        rounded="pill" variant="outlined">
                                        <div class="mx-5 text-subtitle-1">
                                            More About <br v-if="smAndDown"> CSIE NTUST
                                        </div>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col v-if="!smAndDown" class="pa-16">
                            <v-img class="ma-auto" width="300" src="/csie.png"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-col>
    </v-row>
</template>

<script setup>
import { useDisplay } from "vuetify"

const { smAndDown } = useDisplay()
</script>
