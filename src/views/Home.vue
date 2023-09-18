<script setup>
import { ref } from "vue";
import ntnu from "../assets/National_Taiwan_Normal_University_logo.svg.png";
import foonyew from "../assets/foonyewlogo.png";
import ocsa from "../assets/ocsaLogo.png";
import GraduationPromParty from "../assets/GraduationPromParty.png";
import msa from "../assets/msa.png";
import Homecard from "../component/HomeCard"

const experiences = ref([
  {
    img_path: ntnu,
    unit: "國立臺灣師範大學教育政策與行政研究所",
    title: "全端工程師",
    content: "使用現代前後端框架Laravel及Vue,建制及維護教育支持系統。 專任助理(資訊類約用人員)網頁程式開發及研究、功能開發、資料庫維護、定期開發進度報告",
  },
  {
    img_path: foonyew,
    unit: "Foon Yew High School",
    title: "Information Resources Department staff",
    content:
      "資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)",
  },
  {
    img_path: ocsa,
    unit: "國立臺灣科技大學僑生聯誼社",
    title: "副會長",
    content:
      "109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人",
  },
  {
    img_path: GraduationPromParty,
    unit: "僑外籍生畢業晚會活動",
    title: "負責人",
    content:
      "僑外籍生畢業晚會活動 活動策劃人。 負責公關組、資訊開發組、活動策劃。 台科大首次舉辦【僑外籍生畢業晚會】，當天活動氣氛十分熱鬧，活動圓滿結束。",
    link: 'https://sites.google.com/view/2023-ntust-osgp/home',
  },
  {
    img_path: msa,
    unit: "國立臺灣科技大學馬來西亞同學會",
    title: "公關組組長、活動組員",
    content:
      "108屆歡送會公關應届畢業生資料搜集及聯係對外廠商聯係。109屆新生輔導小組公關、迎新活動游戲策劃組統整來臺資訊,持續更新注意事項負責迎活動内容策劃及場控",
  },
]);
</script>

<template>
  <V-container fluid class="bg-deep-purple-darken-3 pa-0 fill-height">
    <v-parallax src="../assets/home-background-banner.jpg" class="align-center fill-height">
      <v-container style="max-width: 1280px;">
        <v-row>
          <v-col>
            <v-card color="rgba(0,0,0,0)" class="elevation-15 rounded-xl" style="backdrop-filter: blur(4px)">
              <v-card-title class="text-h2 ma-2" style="line-height: 1.5">陳亮憬</v-card-title>
              <v-card-subtitle class="text-h5 ma-2" style="line-height: 1.3">全端工程師</v-card-subtitle>
              <v-card-text class="text-h5 ma-2" style="line-height: 1.3">
                大家好，我是一名全端開發人員，熱衷於編碼和批判性思維。我樂於解決覆雜的問題，並將抽象的想法轉化為實際的現實應用。我的適應能力和創造力促使我不斷提高自己的技能，為我所在的任何團隊貢獻價值。
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <Homecard :experiences="experiences"></Homecard>

    </v-parallax>
  </V-container>
</template>
