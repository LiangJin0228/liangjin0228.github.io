<script setup>
import { onMounted, computed, ref } from 'vue';
import { initEmailJS, sendMail } from '../../emailJS.vue';

const form = ref(null)
const valid = ref(false)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const sendMessage = ref('')

const templateParams = computed(() => {
    return {
        name: name.value,
        subject: subject.value,
        email: email.value,
        message: message.value,
    };
});


const nameRules = [
    v => !!v || 'Name is required',
    v => (v && v.length >= 2) || 'Name must be at least 2 characters',
];

const emailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid',
];

const subjectRules = [
    v => !!v || 'Subject is required',
    v => (v && v.length >= 2) || 'Subject must be at least 2 characters',
];

const messageRules = [
    v => !!v || 'Message is required',
    v => (v && v.length >= 20) || 'Message must be at least 20 characters',
];

function send(templateParams) {
    sendMail(templateParams)
    form.value.reset()
    sendMessage.value = "Your mail has been sent!"
}

onMounted(() => {
    initEmailJS();
})
</script>

<template>
    <v-container>
        <v-card class="ma-7 pa-3">
            <v-card-item>
                <v-form ref="form" v-model="valid" validate-on="input">
                    <v-row class="pt-5">
                        <v-col>
                            <v-text-field v-model="name" variant="outlined" label="Name" prepend-icon="mdi-account"
                                :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="email" variant="outlined" label="Email" prepend-icon="mdi-email"
                                :rules="emailRules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-text-field v-model="subject" variant="outlined" label="Subject" :rules="subjectRules"></v-text-field>
                    <v-textarea v-model="message" variant="outlined" label="Message..." :rules="messageRules"></v-textarea>
                </v-form>
                <span class="text-success">{{ sendMessage }}</span>
            </v-card-item>
            <v-card-actions>
                <v-btn :disabled="!valid" variant="tonal" color="success" @click="send(templateParams)">Send Mail To
                    Liang
                    Jin</v-btn>
            </v-card-actions>
        </v-card>

        <v-row no-gutters>
            <v-col>
                <v-card class="ma-7 pa-3" target="_blank" href="https://github.com/LiangJin0228">
                    <v-img height="200px" src="../assets//GitHub_Logo.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-github</v-icon> GitHub
                    </v-card-title>
                    <v-card-subtitle>
                        我會將我的Side Project放在Github上,有興趣的歡迎貢獻
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="ma-7 pa-3" target="_blank" href="https://www.linkedin.com/in/liangjin0228/">
                    <v-img height="200px" src="../assets/LI-Logo.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-linkedin</v-icon> Linkedin
                    </v-card-title>
                    <v-card-subtitle>
                        歡迎追蹤 !
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col>
                <v-card class="ma-7 pa-3" target="_blank">
                    <v-img height="200px" src="../assets//104_logo.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-file-account</v-icon> 104
                    </v-card-title>
                    <v-card-subtitle>
                        暫不開放
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="ma-7 pa-3" target="_blank" href="https://ithelp.ithome.com.tw/users/20162542">
                    <v-img height="200px" src="../assets/ithome_logo.png"></v-img>
                    <v-card-title>
                        <v-icon>mdi-weather-cloudy</v-icon> ithome
                    </v-card-title>
                    <v-card-subtitle>
                        不定期在這邊發表一些技術文章
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>