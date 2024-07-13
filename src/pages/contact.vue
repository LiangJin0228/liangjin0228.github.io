<template>
    <v-app-bar order="1" style="position: fixed" color="rgba(0,0,0,0.8)" scroll-threshold="800">
        <template v-if="!smAndDown">
            <v-container class="d-flex justify-space-between">
                <v-btn to="/Home">Home</v-btn>
                <v-btn to="/Resume">Resume</v-btn>
                <v-btn to="/Contact">Contact Me</v-btn>
            </v-container>
        </template>
        <template v-else>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>

    <v-navigation-drawer v-if="smAndDown" v-model="drawer" location="right" style="position: fixed">
        <v-list>
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

    <v-main>
        <v-card class="ma-7 pa-3">
            <v-container fluid>
                <v-form ref="form" v-model="valid" validate-on="input">
                    <v-row>
                        <v-col cols="12" lg="6">
                            <v-text-field v-model="name" variant="outlined" label="Name" prepend-icon="mdi-account"
                                :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-text-field v-model="email" variant="outlined" label="Email" prepend-icon="mdi-email"
                                :rules="emailRules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-text-field v-model="subject" variant="outlined" label="Subject"
                        :rules="subjectRules"></v-text-field>
                    <v-textarea v-model="message" variant="outlined" label="Full message..."
                        :rules="messageRules"></v-textarea>
                </v-form>
            </v-container>

            <v-card-actions>
                <v-dialog persistent>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" :disabled="!valid" variant="tonal" color="success"
                            @click="send(templateParams)">
                            Send Mail To Liang Jin
                        </v-btn>
                    </template>

                    <template #default="{ isActive }">
                        <v-card class="ma-auto">
                            <v-card-title class="text-wrap">
                                {{ sendSuccess }}
                            </v-card-title>
                            <v-card-actions>
                                <v-btn rounded="lg" color="primary" text="Close Dialog"
                                    @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </v-card-actions>
        </v-card>

        <v-row no-gutters>
            <v-col cols="12" lg="6">
                <v-card class="ma-7 pa-3" target="_blank" href="https://github.com/LiangJin0228">
                    <v-img height="200px" src="/github.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-github</v-icon> GitHub
                    </v-card-title>
                    <v-card-subtitle class="text-wrap">
                        我會將我的Side Project放在Github上,有興趣的歡迎貢獻
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6">
                <v-card class="ma-7 pa-3" target="_blank" href="https://www.linkedin.com/in/liangjin0228/">
                    <v-img height="200px" src="/linkedIn.png"></v-img>
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
                    <v-img height="200px" src="/104.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-file-account</v-icon> 104
                    </v-card-title>
                    <v-card-subtitle class="text-wrap">
                        暫不開放
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6">
                <v-card class="ma-7 pa-3" target="_blank" href="https://ithelp.ithome.com.tw/users/20162542">
                    <v-img height="200px" src="/ithome.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-weather-cloudy</v-icon> ithome
                    </v-card-title>
                    <v-card-subtitle class="text-wrap">
                        不定期在這邊發表一些技術文章
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { initEmailJS, sendMail } from '../../emailJS.vue'
import { useDisplay } from "vuetify"

const { smAndDown } = useDisplay()

const form = ref(null)
const valid = ref(false)
const drawer = ref(false)
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
    v => !/\s/.test(v) || 'Email must not contain spaces'
]

const subjectRules = [
    v => !!v || 'Subject is required',
    v => (v && v.length >= 2) || 'Subject must be at least 2 characters',
]

const messageRules = [
    v => !!v || 'Message is required',
    v => (v && v.length >= 20) || 'Message must be at least 20 characters',
]

function send(templateParams) {
    sendMail(templateParams)
    form.value.reset()
    sendSuccess.value = "Your mail has been sent!"
}

onMounted(() => {
    initEmailJS()
})
</script>