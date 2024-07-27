<template>
  <v-row>
    <v-col class="d-flex justify-start align-end" cols="12" sm="6">
      <v-card class="bg-transparent" flat>
        <v-card-title class="text-h4 text-start text-wrap">
          Arts and Commerce
        </v-card-title>
      </v-card>
    </v-col>
    <v-col class="d-flex justify-end align-end" cols="12" sm="6">
      <v-card class="bg-transparent" flat>
        <v-card-title class="text-subtitle-1 text-end text-wrap text-grey">
          Foon Yew High School
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
              <v-img class="ma-auto" src="/foonyew.png" width="300" />
            </v-col>
            <v-col>
              <v-card class="bg-transparent fill-height d-flex flex-column" flat>
                <v-card-title class="text-h5">
                  2016/1 ~ 2018/12
                </v-card-title>
                <v-card-text class="text-subtitle-1">
                  Foon Yew High School is the largest Chinese independent high school in
                  Malaysia in terms of both students and campus size, and is also the largest
                  Chinese secondary school outside of Mainland China and Taiwan, with the
                  largest number of teachers and students.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    href="https://www.foonyew.edu.my/"
                    rounded="pill"
                    stacked
                    target="_blank"
                    variant="outlined"
                    width="300"
                  >
                    <div class="mx-5 text-subtitle-1">
                      More About <br v-if="smAndDown"> Foon Yew
                    </div>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col v-if="!smAndDown" class="pa-16">
              <v-img class="ma-auto" src="/foonyew.png" width="300" />
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
