<template>
    <v-contaner>
        <v-card class="ma-7 pa-3">
            <v-card-item>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-text-field variant="outlined" label="Name" prepend-icon="mdi-account"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field variant="outlined" label="Email" prepend-icon="mdi-email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-text-field variant="outlined" label="Subject"></v-text-field>
                    <v-textarea variant="outlined" label="Message..."></v-textarea>
                </v-form>
            </v-card-item>
            <v-card-actions>
                <v-btn variant="tonal" color="success">Send Mail To Liang Jin</v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="ma-7 pa-3">
            <v-card-title>
                <v-icon>mdi-github</v-icon> GitHub
            </v-card-title>

        </v-card>
        <v-card class="ma-7 pa-3">
            <v-card-title>
                <v-icon>mdi-linkedin</v-icon> Linkedin
            </v-card-title>

        </v-card>
        <v-card class="ma-7 pa-3">
            <v-card-title>
                <v-icon>mdi-file-account</v-icon> 104
            </v-card-title>

        </v-card>
        <v-card class="ma-7 pa-3">
            <v-card-title>
                <v-icon>mdi-web</v-icon> ithome
            </v-card-title>

        </v-card>
    </v-contaner>
</template>