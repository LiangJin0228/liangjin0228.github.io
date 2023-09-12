<script setup>
import { ref } from 'vue';

const experiences = ref([
  {
    img_path: 'ocsaLogo.png',
    unit: '國立臺灣科技大學僑生聯誼社',
    title: '副會長',
    content: '109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人'
  },
  {
    img_path: 'foonyewlogo.png',
    unit: 'Foon Yew High School',
    title: 'Information Resources Department staff',
    content: '資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)'
  },
  {
    img_path: 'National_Taiwan_Normal_University_logo.svg.png',
    unit: '國立臺灣師範大學教育政策與行政研究所',
    title: '全端工程師',
    content: '使用現代前後端框架Laravel及Vue,建制及維護教育支持系統'
  }
])
</script>

<template>
  <div class="bg-deep-purple-darken-3">
    <v-parallax height="60vh" src="../assets/home-background-banner.jpg" class="align-center">
      <v-card color="rgba(0,0,0,0)" width="80%" flat class="ma-auto">
        <v-card-title class="text-h3 ma-2">陳亮憬</v-card-title>
        <v-card-subtitle class="text-h5 ma-2" style="line-height: 1.3;">全端工程師</v-card-subtitle>
        <v-card-text class="text-h6 ma-2" style="line-height: 1.3;">
          大家好，我是一名全端開發人員，熱衷於編碼和批判性思維。我樂於解決覆雜的問題，並將抽象的想法轉化為實際的現實應用。我的適應能力和創造力促使我不斷提高自己的技能，為我所在的任何團隊貢獻價值。
        </v-card-text>
      </v-card>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col v-for="experience in experiences">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" max-width="344" height="35rem" v-bind="props">
              <v-img :src="'src/assets/' + experience.img_path" aspect-ratio="1" height="15rem"></v-img>

              <v-card-title class="text-h6 text-primary">{{ experience.unit }}</v-card-title>
              <v-card-subtitle class="text-h6 text-primary">{{ experience.title }}</v-card-subtitle>
              <v-card-text>{{ experience.content }}</v-card-text>

              <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                <v-btn variant="flat">See more info</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>