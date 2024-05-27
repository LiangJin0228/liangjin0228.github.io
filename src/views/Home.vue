<template>
    <v-container>
        <v-card class="rounded-xl">
            <v-card-title>Tan Liang Jin</v-card-title>
            <v-card-subtitle>Software Engineer | Full Stack Developers</v-card-subtitle>
            <v-card-text>
                I love programming and I'm good at critical thinking. I enjoy the challenge of solving complex
                problems
                and translating abstract ideas into concrete practical applications. I am adaptable and creative,
                and am
                constantly upgrading my skills to ensure that I can make a valuable contribution to the team.
            </v-card-text>
        </v-card>
    </v-container>

    <v-container id="displayedWrapper" class="d-flex hide-scrollbar" style="overflow-x: auto;">
        <template v-for="(experience, index) in experiences" :key="experience.title">
            <div class="mx-3" :class="{ 'ms-0': index == 0, 'me-0': index == experiences.length - 1 }">
                <Homecard :experience="experience" />
            </div>
        </template>
    </v-container>
</template>

<script>
import ntnu from "../assets/National_Taiwan_Normal_University_logo.svg.png";
import foonyew from "../assets/foonyewlogo.png";
import ocsa from "../assets/ocsaLogo.png";
import GraduationPromParty from "../assets/GraduationPromParty.png";
import msa from "../assets/msa.png";
import Homecard from "../component/HomeCard";

export default {
    components: {
        Homecard,
    },
    data() {
        return {
            experiences: [
                {
                    img: ntnu,
                    org: "國立臺灣師範大學教育政策與行政研究所",
                    title: "全端工程師",
                    content:
                        "使用現代前後端框架Laravel及Vue,建制及維護教育支持系統。 專任助理(資訊類約用人員)網頁程式開發及研究、功能開發、資料庫維護、定期開發進度報告",
                },
                {
                    img: foonyew,
                    org: "Foon Yew High School",
                    title: "Information Resources Department staff",
                    content:
                        "資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)",
                },
                {
                    img: ocsa,
                    org: "國立臺灣科技大學僑生聯誼社",
                    title: "副會長",
                    content:
                        "109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人",
                },
                {
                    img: GraduationPromParty,
                    org: "僑外籍生畢業晚會活動",
                    title: "負責人",
                    content:
                        "僑外籍生畢業晚會活動 活動策劃人。 負責公關組、資訊開發組、活動策劃。 台科大首次舉辦【僑外籍生畢業晚會】，當天活動氣氛十分熱鬧，活動圓滿結束。",
                    link: "https://sites.google.com/view/2023-ntust-osgp/home",
                },
                {
                    img: msa,
                    org: "國立臺灣科技大學馬來西亞同學會",
                    title: "公關組組長、活動組員",
                    content:
                        "108屆歡送會公關應届畢業生資料搜集及聯係對外廠商聯係。109屆新生輔導小組公關、迎新活動游戲策劃組統整來臺資訊,持續更新注意事項負責迎活動内容策劃及場控",
                },
            ]
        }
    },
    mounted() {
        const displayedWrapper = document.getElementById("displayedWrapper");
        displayedWrapper.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) {
                displayedWrapper.scrollLeft += 100;
            } else {
                displayedWrapper.scrollLeft -= 100;
            }
        });
    },
};
</script>