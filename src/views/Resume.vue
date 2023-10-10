<script setup>
import { reactive, ref } from "vue";
import { useDisplay } from "vuetify";
import MyPhoto from "../assets/liangjin-license_photo-removebg-preview.png";

const { smAndDown } = useDisplay();
const items = reactive([
    {
        type: "header",
        "prepend-avatar": MyPhoto,
        title: "Tan Liang Jin",
        subtitle: "liangjin0228@gmailcom",
    },
    {
        "prepend-icon": "mdi-briefcase",
        title: "工作經歷",
        value: "experience",
        targetRef: "experience"
    },
    {
        "prepend-icon": "mdi-account-school",
        title: "學歷",
        value: "education",
        targetRef: "education"
    },
    {
        "prepend-icon": "mdi-tools",
        title: "專業技能",
        value: "skill",
        targetRef: "skill"
    },
    {
        "prepend-icon": "mdi-trophy-award",
        title: "專案成就",
        value: "achievements",
        targetRef: "achievements"
    },
    {
        "prepend-icon": "mdi-file-check",
        title: "求職條件",
        value: "requirements",
        targetRef: "requirements"
    },
    {
        "prepend-icon": "mdi-translate-variant",
        title: "語文能力",
        value: "language",
        targetRef: "language"
    },
    {
        "prepend-icon": "mdi-calendar-blank-multiple",
        title: "社團活動",
        value: "societies",
        targetRef: "societies"
    },
]);
</script>

<!-- 因爲原生的HTML Tag 和 Vuetify 的 Tag 是不一樣的 -->
<!-- 所以原生的HTML Tag 可以直接用 script setup 的語法糖，但是Vuetify Tag 需要取得 $el -->
<script>
export default {
    methods: {
        scrollToTarget(refName) {
            const targetDiv = this.$refs[refName];
            if (targetDiv) {
                const targetElement = targetDiv.$el;
                if (refName === 'scrollContainer') {
                    targetElement.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }
                else {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        },
    },
};
</script>

<template>
    <v-container>
        <v-btn @click="scrollToTarget('scrollContainer')" style="right: 2rem; top: 82vh; z-index: 9999" position="fixed"
            class="bg-indigo-darken-1" icon="mdi-format-vertical-align-top" size="large">
        </v-btn>
        <v-navigation-drawer :permanent="!smAndDown" elevation="5">
            <v-list density="comfortable" nav>
                <v-list-item rounded="lg" v-for="item in items" :key="item['value']" :type="item['type']"
                    :prepend-avatar="item['prepend-avatar']" :prepend-icon="item['prepend-icon']" :title="item['title']"
                    :subtitle="item['subtitle']" :value="item['value']"
                    @click="scrollToTarget(item['targetRef'])"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-sheet ref="scrollContainer" style="height: 80vh" class="overflow-auto hide-scrollbar">
            <v-card flat ref="experience">
                <v-card-title>工作經歷</v-card-title>
                <v-card class="ma-5">
                    <v-card-title class="rounded elevation-1 mb-2">Information Resources Department staff</v-card-title>
                    <v-card-subtitle>Foon Yew High School Johor Bahru(中學教育事業
                        100~500人)</v-card-subtitle>
                    <v-card-text>
                        <v-sheet>
                            技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。
                            <br />

                            軟體相關：負責電腦還原系統設置(使用 Faronics Deep Freeze),進行
                            Windows 及各軟體重大補丁更新，維護電腦系統及軟體。<br />

                            硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。<br />

                            網路相關：負責解決網路（有綫/無綫）無法連接問題、進行 Network
                            switch 檢查維護、進行 IP
                            分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)<br /><br />
                            #技術支援 #硬體維修 #電腦維修 #行政協助 #網路系統配置 #庫存管理
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-card>

            <v-card flat ref="education">
                <v-card-title>學術經歷</v-card-title>
                <v-card class="ma-5">
                    <v-card-title class="elevation-1 mb-2">國立臺灣科技大學</v-card-title>
                    <v-card-subtitle class="mb-2">資訊管理學系四技畢業</v-card-subtitle>
                </v-card>
            </v-card>

            <v-card flat ref="skill">
                <v-card-title>專業技能</v-card-title>
                <v-card class="ma-5">
                    <v-card-title class="elevation-1 mb-2">Programming Language or Skill</v-card-title>
                    <v-card-text>
                        <ul class="ms-5">
                            <li>HTML/CSS/Bootstrap</li>
                            <li>JavaScript/jQuery/AJAX</li>
                            <li>Java</li>
                            <li>PHP/Laravel</li>
                            <li>Python/Flask</li>
                            <li>Google Apps Script/API</li>
                            <li>C#</li>
                        </ul>

                        <br />
                        #Java #Python #C# #PHP #HTML #CSS #JavaScript #jQuery #AJAX
                        #軟體程式設計
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title class="elevation-1 mb-2">HCL Domino/Notes/Volt 開發</v-card-title>
                    <v-card-text>
                        <ul class="ms-5">
                            <li>版本經驗:Domino 12.0.1</li>
                            <li>BPM/ Workflow 應用系統開發</li>
                            <li>編程語言： LotusScript、 Formula Language</li>
                        </ul>

                        <br />
                        #LotusScript #Lotus Notes #Domino #軟體程式設計
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title class="elevation-1 mb-2">MySQL</v-card-title>
                    <v-card-text>
                        <ul class="ms-5">
                            <li>熟悉基礎原理，可獨立完成數據庫的設計、管理</li>
                            <li>
                                熟悉CRUD等操作,理解Inner Join、Left Join、Right Join, Subquery
                            </li>
                            <li>理解資料庫正規化(實作經驗到第三正規化)</li>
                        </ul>

                        <br />
                        #MySQL #資料庫程式設計 #資料庫系統管理維護 #資料庫軟體應用
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title class="elevation-1 mb-2">網頁製作</v-card-title>
                    <v-card-text>
                        熟練掌握HTML、CSS、JavaScript、jQuery、Bootstrap、RWD和AJAX等前端技術,具備以下能力:
                        <ul class="ms-5">
                            <li>RWD</li>
                            <li>可開發互動式的網頁應用程式</li>
                            <li>在網頁中使用AJAX進行非同步數據交換</li>
                        </ul>
                        <br />
                        具有4個網頁相關專案的開發經驗,涉及前端和後端技術。後端技術方面,具備以下能力:
                        <ul class="ms-5">
                            <li>精通PHP語言,有Laravel 框架的基礎知識</li>
                            <li>具有Python Flask開發經驗</li>
                            <li>Google Apps Script開發網頁應用程式</li>
                            <li>使用Apache和IBM Cloud / AWS搭建Server</li>
                            <li>使用MySQL資料庫</li>
                        </ul>

                        <br />
                        #HTML #CSS #JavaScript #jQuery #PHP #Python #MySQL #AJAX #Git
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title class="elevation-1 mb-2">Scrum</v-card-title>
                    <v-card-text>
                        除了一般的瀑布式開發流程,也了解Scrum和Kanban

                        <br /><br />
                        #軟體工程系統開發 #專案溝通╱整合管理 #系統架構規劃
                    </v-card-text>
                </v-card>
            </v-card>

            <v-card flat ref="achievements">
                <v-card-title>專案成就</v-card-title>
                <v-card class="ma-5">
                    <v-card-title>應用Hololens 2於撞球運動輔助系統</v-card-title>
                    <v-card-text>
                        大學期間實務專題，主要是研究AR/VR和演算法及ML領域，設備為Microsoft Hololens 2。通過MR（Mixed
                        Reality）的方式幫助學習撞球，計算最佳解并且畫出打擊球的路徑輔助綫。此專題獲得校内的專題競賽佳獎。
                        ●負責處理UWP的建制，部署到Hololens2上
                        ●Unity / C# .NET 開發
                        ●MRTK部件應用
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>全臺客運後臺系統</v-card-title>
                    <v-card-text>
                        ●Apache + PHP + MySQL
                        ●組長，負責爲系統及資料庫分析、後臺建設
                        ●登陸系統
                        ●管理者後臺系統（發佈公告）
                        ●使用者系統（訂單管理、訂票記錄、個人資料……）
                        ●Cookie的運用
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>跨部門物品借用系統</v-card-title>
                    <v-card-text>
                        ●HCL Domino/Notes （網頁：Xpages）
                        ●LotusScript + Formula Language
                        ●組長，負責系統分析、商業邏輯、程式編輯及統整
                        ●各部門人員層級權限、限制（新增/物品、借用……）
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>僑外籍生畢業晚會活動網站</v-card-title>
                    <v-card-text>
                        ●Google Apps Script + Google API + Google Sites
                        ●組長，負責規劃網頁及指導非技術人員建制網站和功能、程式編輯
                        ●HTML Form post到Google Form
                        ●畢業生資料登陸系統、留言墻、晚宴桌位查詢系統
                    </v-card-text>
                    <v-card-actions>
                        <v-btn href="https://sites.google.com/view/2023-ntust-osgp/home">前往查看</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>多執行緒Youtube影片下載器</v-card-title>
                    <v-card-text>
                        ●Python
                        ●注冊/登錄系統（歷史記錄）
                        ●下載後可直接點開播放
                        ●多執行緒加快下載速度
                        ●多執行緒的鎖定
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>在綫網頁播放器 - 輕量化家用NAS音樂播放器</v-card-title>
                    <v-card-text>
                        ●Python Flask + IBM Cloud
                        ●組長，負責後端和整合
                        ●讀取音樂檔案並播放，支援大部分市面上音樂播放的基礎功能
                        ●受當時Clubhouse風潮影響，建立Room功能，可以多人同時一起聼一個房主的播放列表
                    </v-card-text>
                </v-card>
            </v-card>

            <v-card flat ref="language">
                <v-card-title>語文能力</v-card-title>
                <v-card class="ma-5">
                    <v-card-title>英文</v-card-title>
                    <v-card-text>
                        聽/中等說/略懂讀/中等寫/略懂
                        TOEIC (多益測驗) 680分
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>馬來文</v-card-title>
                    <v-card-text>
                        聽/中等說/略懂讀/中等寫/略懂
                    </v-card-text>
                </v-card>
            </v-card>

            <v-card flat ref="societies">
                <v-card-title>社團活動</v-card-title>
                <v-card class="ma-5">
                    <v-card-title>國立臺灣科技大學僑生聯誼社</v-card-title>
                    <v-card-subtitle>2020/7~2022/6</v-card-subtitle>
                    <v-card-text>
                        109、110屆副社長
                        任職期間策劃及舉辦超過10次中大型活動
                        創建資訊部門，建立形象網站與活動網站設計，與組員協作開發新功能
                        111年度應届畢業僑外籍生畢業晚會活動負責人（副）
                    </v-card-text>
                </v-card>

                <v-card class="ma-5">
                    <v-card-title>國立臺灣科技大學馬來西亞同學會</v-card-title>
                    <v-card-subtitle>2019/12~2020/10</v-card-subtitle>
                    <v-card-text>
                        108屆歡送會公關
                        應届畢業生資料搜集及聯係
                        對外廠商聯係

                        109屆新生輔導小組公關、迎新活動游戲策劃組
                        統整來臺資訊，持續更新注意事項
                        負責迎活動内容策劃及場控
                    </v-card-text>
                </v-card>
            </v-card>
        </v-sheet>
    </v-container>
</template>
