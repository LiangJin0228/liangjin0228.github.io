<template>
  <AppDrawer />
  <v-main>
    <v-sheet class="fill-height">
      <v-sheet class="ma-auto pa-4" max-width="1280">
        <v-row>
          <v-col cols="6">
            <h1>Resume</h1>
          </v-col>
          <v-col cols="6" class="ma-auto d-flex justify-end align-center">
            <v-btn color="primary" href="/TanLiangJin.pdf" target="_blank">Download CV</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2>工作經驗</h2>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>軟體工程師</v-card-title>
              <v-card-subtitle class="text-wrap">國立臺灣師範大學</v-card-subtitle>
              <v-card-subtitle class="text-wrap">2023/8~仍在職</v-card-subtitle>
              <v-card-subtitle class="text-wrap">
                PHP / Laravel / JavaScript (AngularJS / Vue) / MSSQL / Docker / Nginx / Git
              </v-card-subtitle>
              <v-card-text>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li>協助設計與開發全新的問卷系統,採用不同的架構與設計理念,成功解決了舊系統無法滿足大量新需求的挑戰。</li>
                    <li>主動識別並解決系統中的風險、漏洞與弱點,確保系統在稽核過程中未曾出現重大問題。</li>
                    <li>升級後端框架與更換前端技術棧,顯著提升了系統的安全性與穩定性。</li>
                    <li>協助培訓並指導 2 名新員工,幫助他們快速適應開發流程並提供技術支援。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>

            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>MIS助理</v-card-title>
              <v-card-subtitle class="text-wrap">Johore Bahru Foon Yew Associated Chinese Schools</v-card-subtitle>
              <v-card-subtitle class="text-wrap">2018/12~2019/9</v-card-subtitle>
              <v-card-subtitle class="text-wrap">電腦設備裝配 / 設備維修 / 網路故障排除</v-card-subtitle>
              <v-card-text>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li>維護各類多媒體教學設備。</li>
                    <li>網路設定與故障排除。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2>學歷</h2>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>國立臺灣科技大學</v-card-title>
              <v-card-subtitle class="text-wrap">資訊工程系碩士班</v-card-subtitle>
              <v-card-subtitle class="text-wrap">2024/9 ~ 碩士日間就讀中</v-card-subtitle>
              <v-card-text>
                <strong>研究領域</strong>: 人工智慧、機器學習、資料探勘、深度學習、生成式AI、自然語言處理
              </v-card-text>
            </v-card>
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>國立臺灣科技大學</v-card-title>
              <v-card-subtitle class="text-wrap">資訊管理系大學部</v-card-subtitle>
              <v-card-subtitle class="text-wrap">2019/9 ~ 2023/7</v-card-subtitle>
              <v-card-text>
                <strong>獎項</strong>: 校內專題競賽佳作 - 應用 Hololens 2 於撞球運動輔助系統 <br>
                <strong>活動</strong>: <br>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li>曾與「臺灣自動化之父」、「競爭力之師」 —— 石滋宜博士進行訪談。</li>
                    <li>曾擔任兩届僑生社團副會長(2020~2022),在僑生社團創立資訊部門,擔任第一屆資訊長。</li>
                    <li>首次通過僑生社團與臺科大諮商輔導組合作舉辦心理營。</li>
                    <li>曾任台科大馬來西亞同學會迎新負責人之一。</li>
                    <li>曾任第 111 屆華僑學生暨外籍學生畢業典禮活動負責人。</li>
                    <li>曾參與 112 音樂與文化 | 長者關懷行動。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2>技能</h2>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>Web開發</v-card-title>
              <v-card-text>
                <v-container fluid class="pb-0 ps-6">
                  <ul>
                    <li>具備一年以上的開發經驗,精通系統設計與規劃,熟悉 Request Lifecycle,能獨立完成專案開發。</li>
                    <li>後端使用 Laravel 框架,採用 MVC 架構及物件導向程式設計(OOP),並靈活運用多種設計模式,對系統架構有深入理解,且熟練撰寫單元測試(Unit Test)。</li>
                    <li>前端使用 Vue.js 搭配 Vuetify UI 框架進行快速開發與響應式網頁設計(RWD),熟悉 webpack 和 Vite 進行打包與優化。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>軟體專案管理</v-card-title>
              <v-card-text>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li>具備專案管理經驗,根據客戶需求進行可行性評估,並負責系統開發時程的規劃與監控。</li>
                    <li>採用 Kanban (Jira) 進行敏捷開發,靈活管理開發流程和資源分配。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-card-title>Technical Skills</v-card-title>
              <v-card-text>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li><strong>Languages</strong>: Java, C#, Python, PHP, JavaScript, HTML, CSS, LotusScript。</li>
                    <li><strong>Framework</strong>: Laravel, Vue, Vuetify。</li>
                    <li><strong>Others</strong>: Linux, Git, Docker, Nginx, MySQL, MSSQL, Drone CI, Gitlab CI/CD, HCL
                      Domino。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2>專案</h2>
            <v-divider />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <v-img src="/tted.jpg"></v-img>
              <v-card-title>教育部中小學師資資料庫(工作負責項目)</v-card-title>
              <v-card-text>
                為瞭解國內師資培育現況,自民國97年底,建置「師資培育長期追蹤資料庫」,針對各學年度全國師資生,進行個人且長期的追蹤性調查。提供政府及學界實徵性的調查資料,以供師資培育政策制訂與學術研究之用,期以提升教師之素質。
                <v-container fluid class="pb-0 ps-6">
                  <ul>
                    <li>系統開發與維護,包括權限管理、檔案管理和表單管理等系統。</li>
                    <li>建立統計分析資料系統,能夠分析不同師資培育大學或全國的師資培育現況。</li>
                    <li>將資料視覺化,幫助使用者快速理解分析結果。</li>
                    <li>問卷系統開發、問卷編輯。</li>
                    <li>資安威脅、漏洞修補。</li>
                    <li>敏捷開發,ISMS資訊安全管理流程。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <div class="bg-black">
                <v-img src="/2023grad.png" height="255"></v-img>
              </div>
              <v-card-title>僑外籍生畢業晚會活動網站</v-card-title>
              <v-card-text>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li>使用Google Apps Script 和 JavaScript進行開發。</li>
                    <li>在不配置伺服器(Apache、Nginx)的情況下解決跨站源資源共享(CORS)問題,確保系統正常運行。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
            <v-card class="mb-6" variant="outlined" rounded="xl">
              <div class="bg-black">
                <v-img src="/achievement.webp" cover height="255"></v-img>
              </div>
              <v-card-title>應用 Hololens 2 於撞球運動輔助系統</v-card-title>
              <v-card-text>
                <v-container fluid class="py-0 ps-6">
                  <ul>
                    <li>負責 Unity 畫面渲染,使用 C# 和 MRTK(Mixed Reality Toolkit)進行開發。</li>
                    <li>幫助撞球選手找到最佳打擊角度,並預測撞擊路徑。</li>
                  </ul>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-sheet>
    <TopButton />
  </v-main>
</template>

<script setup>
import AppDrawer from '@/components/AppDrawer.vue'
import TopButton from '@/components/TopButton.vue'
</script>
