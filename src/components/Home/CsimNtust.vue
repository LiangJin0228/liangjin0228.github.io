<template>
  <v-row>
    <v-col class="d-flex justify-start align-end" cols="12" sm="6">
      <v-card class="bg-transparent" flat>
        <v-card-title class="text-h4 text-start text-wrap">
          Department of Information Management
        </v-card-title>
        <v-card-subtitle class="text-subtitle-1 text-start text-wrap">
          Bachelor's degree
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col class="d-flex justify-end align-end" cols="12" sm="6">
      <v-card class="bg-transparent" flat>
        <v-card-title class="text-subtitle-1 text-end text-wrap text-grey">
          National Taiwan University of Science and Technology
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-container fluid>
        <v-card class="bg-transparent pa-5" hover rounded="xl">
          <v-row>
            <v-col v-if="smAndDown" class="pa-16">
              <v-img class="ma-auto" src="/cs.png" width="300" />
            </v-col>
            <v-col>
              <v-card class="bg-transparent fill-height d-flex flex-column" flat>
                <v-card-title class="text-h5">
                  2019/9 ~ 2023/7
                </v-card-title>
                <v-card-text class="text-subtitle-1">
                  NTUST Department of Information Management focuses on the development of practical
                  talents such as “system technology engineers,” “information system development
                  managers,” and “information resource planners,” while the Graduate School focuses on
                  the development of advanced information management professionals and researchers.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    href="https://www.cs.ntust.edu.tw/"
                    rounded="pill"
                    stacked
                    target="_blank"
                    variant="outlined"
                    width="300"
                  >
                    <div class="mx-5 text-subtitle-1">
                      More About <br v-if="smAndDown"> CSIM NTUST
                    </div>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col v-if="!smAndDown" class="pa-16">
              <v-img class="ma-auto" src="/cs.png" width="300" />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  const { smAndDown } = useDisplay()
</script>
