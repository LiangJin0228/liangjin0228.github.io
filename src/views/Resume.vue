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

        <section style="height: 80vh;" class="overflow-auto hide-scrollbar">
            <v-container id="experience">
                <v-card width="100%">
                    <v-card-title class="elevation-1 mb-2">Information Resources Department staff</v-card-title>
                    <v-card-subtitle>Foon Yew High School Johor Bahru(中學教育事業 100~500人)</v-card-subtitle>
                    <v-card-text>
                        <v-sheet>
                            技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。 <br>

                            軟體相關：負責電腦還原系統設置(使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。<br>

                            硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。<br>

                            網路相關：負責解決網路（有綫/無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)<br><br>
                            #技術支援 #硬體維修 #電腦維修 #行政協助 #網路系統配置 #庫存管理
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-container>

            <v-container id="education">
                <v-card width="100%">
                    <v-card-title class="elevation-1 mb-2">國立臺灣科技大學</v-card-title>
                    <v-card-subtitle class="mb-2">資訊管理學系四技畢業</v-card-subtitle>
                </v-card>
            </v-container>

            <v-container id="skill">
                <v-card width="100%" class="mb-5">
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

                        <br>
                        #Java #Python #C# #PHP #HTML #CSS #JavaScript #jQuery #AJAX #軟體程式設計
                    </v-card-text>
                </v-card>

                <v-card width="100%" class="mb-5">
                    <v-card-title class="elevation-1 mb-2">HCL Domino/Notes/Volt 開發</v-card-title>
                    <v-card-text>
                        <ul class="ms-5">
                            <li>版本經驗:Domino 12.0.1 </li>
                            <li>BPM/ Workflow 應用系統開發</li>
                            <li>編程語言： LotusScript、 Formula Language</li>
                        </ul>

                        <br>
                        #LotusScript #Lotus Notes #Domino #軟體程式設計
                    </v-card-text>
                </v-card>

                <v-card width="100%" class="mb-5">
                    <v-card-title class="elevation-1 mb-2">MySQL</v-card-title>
                    <v-card-text>
                        <ul class="ms-5">
                            <li>熟悉基礎原理，可獨立完成數據庫的設計、管理</li>
                            <li>熟悉CRUD等操作,理解Inner Join、Left Join、Right Join, Subquery</li>
                            <li>理解資料庫正規化(實作經驗到第三正規化)</li>
                        </ul>

                        <br>
                        #MySQL #資料庫程式設計 #資料庫系統管理維護 #資料庫軟體應用
                    </v-card-text>
                </v-card>

                <v-card width="100%" class="mb-5">
                    <v-card-title class="elevation-1 mb-2">網頁製作</v-card-title>
                    <v-card-text>
                        熟練掌握HTML、CSS、JavaScript、jQuery、Bootstrap、RWD和AJAX等前端技術,具備以下能力:
                        <ul class="ms-5">
                            <li>RWD</li>
                            <li>可開發互動式的網頁應用程式</li>
                            <li>在網頁中使用AJAX進行非同步數據交換</li>
                        </ul>
                        <br>
                        具有4個網頁相關專案的開發經驗,涉及前端和後端技術。後端技術方面,具備以下能力:
                        <ul class="ms-5">
                            <li>精通PHP語言,有Laravel 框架的基礎知識</li>
                            <li>具有Python Flask開發經驗</li>
                            <li>Google Apps Script開發網頁應用程式</li>
                            <li>使用Apache和IBM Cloud / AWS搭建Server</li>
                            <li>使用MySQL資料庫</li>
                        </ul>

                        <br>
                        #HTML #CSS #JavaScript #jQuery #PHP #Python #MySQL #AJAX #Git
                    </v-card-text>
                </v-card>

                <v-card width="100%" class="mb-5">
                    <v-card-title class="elevation-1 mb-2">Scrum</v-card-title>
                    <v-card-text>
                        除了一般的瀑布式開發流程,也了解Scrum和Kanban

                        <br><br>
                        #軟體工程系統開發 #專案溝通╱整合管理 #系統架構規劃
                    </v-card-text>
                </v-card>
            </v-container>

        </section>
    </v-container>
</template>