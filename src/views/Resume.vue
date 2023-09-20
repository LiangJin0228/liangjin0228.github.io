<script setup>
import { ref } from "vue";
import MyPhoto from "../assets/liangjin-license_photo-removebg-preview.png";
</script>

<template>
    <v-container>
        <v-navigation-drawer elevation="5">
            <v-list>
                <v-list-item :prepend-avatar=MyPhoto title="Tan Liang Jin" subtitle="liangjin0228@gmailcom"></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="comfortable" nav>
                <v-list-item rounded="xl" prepend-icon="mdi-briefcase-outline" title="工作經歷"
                    value="experience"></v-list-item>
                <v-list-item rounded="xl" prepend-icon="mdi-school-outline" title="學歷" value="education"></v-list-item>
                <v-list-item rounded="xl" prepend-icon="mdi-hammer-screwdriver" title="專長" value="skill"></v-list-item>
                <v-list-item rounded="xl" prepend-icon="mdi-trophy-award" title="專案成就" value="achievements"></v-list-item>
                <v-list-item rounded="xl" prepend-icon="mdi-file-sign" title="求職條件" value="requirements"></v-list-item>
                <v-list-item rounded="xl" prepend-icon="mdi-translate-variant" title="語文能力" value="language"></v-list-item>
                <v-list-item rounded="xl" prepend-icon="mdi-calendar-star" title="社團活動" value="societies"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>

        </v-main>
    </v-container>
</template>