<template>
  <AppDrawer />
  <v-main>
    <v-container style="max-width: 1280px">
      <v-card class="ma-7 pa-3">
        <v-container fluid>
          <v-form ref="form" v-model="valid" validate-on="input">
            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="name"
                  label="Name"
                  prepend-icon="mdi-account"
                  :rules="nameRules"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  prepend-icon="mdi-email"
                  :rules="emailRules"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-text-field
              v-model="subject"
              label="Subject"
              :rules="subjectRules"
              variant="outlined"
            />
            <v-textarea
              v-model="message"
              label="Full message..."
              :rules="messageRules"
              variant="outlined"
            />
          </v-form>
        </v-container>

        <v-card-actions>
          <v-dialog persistent>
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                color="success"
                :disabled="!valid"
                variant="tonal"
                @click="send(templateParams)"
              >
                Send Mail To Liang Jin
              </v-btn>
            </template>

            <template #default="{ isActive }">
              <v-card class="ma-auto">
                <v-card-title class="text-wrap">
                  {{ sendSuccess }}
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    rounded="lg"
                    text="Close Dialog"
                    @click="isActive.value = false"
                  />
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-card-actions>
      </v-card>

      <v-row no-gutters>
        <v-col cols="12" lg="6">
          <v-card class="ma-7 pa-3" href="https://github.com/LiangJin0228" target="_blank">
            <v-img height="200px" src="/github.png" />
            <v-card-title>
              <v-icon>mdi-github</v-icon> GitHub
            </v-card-title>
            <v-card-subtitle class="text-wrap">
              我會將我的Side Project放在Github上,有興趣的歡迎貢獻
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card class="ma-7 pa-3" href="https://www.linkedin.com/in/liangjin0228/" target="_blank">
            <v-img height="200px" src="/linkedIn.png" />
            <v-card-title>
              <v-icon>mdi-linkedin</v-icon> Linkedin
            </v-card-title>
            <v-card-subtitle class="text-wrap">
              歡迎追蹤 !
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" lg="6">
          <v-card class="ma-7 pa-3" target="_blank">
            <v-img height="200px" src="/104.png" />
            <v-card-title>
              <v-icon>mdi-file-account</v-icon> 104
            </v-card-title>
            <v-card-subtitle class="text-wrap">
              暫不開放
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card class="ma-7 pa-3" href="https://ithelp.ithome.com.tw/users/20162542" target="_blank">
            <v-img height="200px" src="/ithome.png" />
            <v-card-title>
              <v-icon>mdi-weather-cloudy</v-icon> ithome
            </v-card-title>
            <v-card-subtitle class="text-wrap">
              不定期在這邊發表一些技術文章
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
  import AppDrawer from '@/components/AppDrawer.vue'
  import { computed, onMounted, ref } from 'vue'
  import { initEmailJS, sendMail } from '../../emailJS.vue'

  const form = ref(null)
  const valid = ref(false)
  const name = ref('')
  const email = ref('')
  const subject = ref('')
  const message = ref('')
  const sendSuccess = ref('')

  const templateParams = computed(() => {
    return {
      name: name.value,
      subject: subject.value,
      email: email.value,
      message: message.value,
    }
  })

  const nameRules = [
    v => !!v || 'Name is required',
    v => (v && v.length >= 2) || 'Name must be at least 2 characters',
  ]

  const emailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid',
    v => !/\s/.test(v) || 'Email must not contain spaces',
  ]

  const subjectRules = [
    v => !!v || 'Subject is required',
    v => (v && v.length >= 2) || 'Subject must be at least 2 characters',
  ]

  const messageRules = [
    v => !!v || 'Message is required',
    v => (v && v.length >= 20) || 'Message must be at least 20 characters',
  ]

  function send (templateParams) {
    sendMail(templateParams)
    form.value.reset()
    sendSuccess.value = 'Your mail has been sent!'
  }

  onMounted(() => {
    initEmailJS()
  })
</script>
