<template>
    <v-app-bar order="1" style="position: fixed" color="rgba(0,0,0,0.8)" scroll-behavior="hide elevate inverted"
        scroll-threshold="800">
        <template v-if="!smAndDown">
            <v-container class="d-flex justify-space-between">
                <v-menu v-model="homeMenu" open-on-hover>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" @click="handleScrollTo()">
                            <v-icon size="x-large">mdi-menu</v-icon> &nbsp; Home
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="handleScrollTo('about-me')">
                            <v-list-item-title>About Me</v-list-item-title>
                        </v-list-item>
                        <!-- <v-list-item @click="handleScrollTo('experiences')">
                            <v-list-item-title>Experiences</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleScrollTo('skills')">
                            <v-list-item-title>Skils</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleScrollTo('educations')">
                            <v-list-item-title>Academic Background</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleScrollTo('projects')">
                            <v-list-item-title>Projects</v-list-item-title>
                        </v-list-item> -->
                    </v-list>
                </v-menu>
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
            <v-list-item @click="handleScrollTo('top', true)">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('about-me', true)">
                <v-list-item-title>About Me</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item @click="handleScrollTo('experiences', true)">
                <v-list-item-title>Experiences</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('skills', true)">
                <v-list-item-title>Skils</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('educations', true)">
                <v-list-item-title>Academic Background</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('projects', true)">
                <v-list-item-title>Projects</v-list-item-title>
            </v-list-item> -->
            <v-list-item to="/Resume">
                <v-list-item-title>Resume</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Contact">
                <v-list-item-title>Contact Me</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main>
        <v-sheet :height="!smAndDown ? '130vh' : '200vh'">
            <video style="object-fit: cover;height: 100vh;width: 100vw;position: fixed;z-index: 0;" preload="auto" muted
                autoplay loop>
                <source src="/infinity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <v-container :style="{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${scale})`,
            }">
                <div class="ma-auto" style="width: fit-content; max-width: 63vw">
                    <p class="text-h1 font-weight-black">Hej!</p>
                    <p class="text-h6">
                        I'm
                        <span class="font-weight-black text-pink-lighten-3">Full-stack developer</span>
                        passionate about creating
                        <span class="font-weight-black text-pink-lighten-3">efficient</span>
                        and
                        <span class="font-weight-black text-pink-lighten-3">accessible</span>
                        digital solutions.
                    </p>
                </div>
            </v-container>
            <v-container class="text-center" :style="{
                position: 'fixed',
                top: '95%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
            }">
                <v-btn @click="handleScrollTo('about-me')" variant="text" icon="mdi-arrow-down"></v-btn>
            </v-container>
        </v-sheet>

        <BaseComponent baseId="about-me">
            <v-row>
                <v-col class="d-flex justify-center">
                    <h3 class="underline-shorter text-h3 text-center font-weight-bold">
                        About Me
                    </h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center mb-5">
                    <i class="text-subtitle-1 text-center text-grey">
                        Malaysian working as an engineer in Taiwan.
                    </i>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-card flat color="transparent">
                        <v-card-title>Liang Jin Tan(陳亮憬)</v-card-title>
                        <v-card-text>
                            From Malaysia to Taiwan, I am a full-stack developer passionate about technology and
                            problem-solving, with a broad expertise spanning front-end to back-end development. My
                            skills are rooted in a diverse programming background. <br><br>

                            I value the quality of my code and focus on honing my skills in system architecture design
                            and writing algorithms to solve different problems through various Design Patterns. <br><br>

                            The "CPAS Talent Diagnostic Report" underscores my strengths in innovation, independence,
                            and analytical thinking, essential for addressing the tech industry's challenges with
                            confidence.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card flat color="transparent">
                        <v-card-title>My toolkit</v-card-title>
                        <v-card-text>
                            <v-chip class="ma-1">Docker</v-chip>
                            <v-chip class="ma-1">Git</v-chip>
                            <v-chip class="ma-1">Linux</v-chip>
                            <v-chip class="ma-1">Nginx</v-chip>
                            <v-chip class="ma-1">Vite</v-chip>
                            <v-chip class="ma-1">Webpack</v-chip>

                            <v-chip class="ma-1">PHP</v-chip>
                            <v-chip class="ma-1">Java</v-chip>
                            <v-chip class="ma-1">Python</v-chip>
                            <v-chip class="ma-1">C#</v-chip>
                            <v-chip class="ma-1">Google Apps Script</v-chip>
                            <v-chip class="ma-1">JavaScript</v-chip>
                            <v-chip class="ma-1">CSS</v-chip>
                            <v-chip class="ma-1">HTML</v-chip>
                            <v-chip class="ma-1">HCL Domino/Notes/Volt</v-chip>
                            <v-chip class="ma-1">SQL</v-chip>

                            <v-chip class="ma-1">Laravel</v-chip>
                            <v-chip class="ma-1">PHP Unit</v-chip>
                            <v-chip class="ma-1">Vue</v-chip>
                            <v-chip class="ma-1">Vuetify</v-chip>
                            <v-chip class="ma-1">jQuery</v-chip>
                            <v-chip class="ma-1">ChartJS</v-chip>
                            <v-chip class="ma-1">Ajax</v-chip>
                            <v-chip class="ma-1">RWD</v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </BaseComponent>

        <!-- <v-card flat id="about-me" min-height="100vh"
            class="text-black d-flex flex-column justify-space-between background-5"
            :class="lgAndUp ? 'px-16' : 'px-4'">
            <v-container class="pa-0 ma-auto" style="max-width: 1440px;">
                <v-row class="my-16 fade-in">
                    <span class="ma-auto text-center text-h4 font-weight-black"
                        style="text-decoration: underline; text-decoration-color: #F48FB1; text-underline-offset: 20px;">
                        About me
                    </span>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="5" :offset="lgAndUp ? '1' : '0'" class="d-flex justify-center align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="5" class="d-flex justify-center align-center">
                        <v-container>
                            <v-card flat color="transparent" class="text-justify">
                                <v-card-title class="display-1 mb-4 font-weight-black"><strong>陳亮憬</strong> (Liang Jin
                                    Tan)</v-card-title>
                                <v-card-text class="subtitle-1 font-weight-bold">
                                    <p>From Malaysia to Taiwan, I am a full-stack developer passionate about technology
                                        and
                                        problem-solving, with a broad expertise spanning front-end to back-end
                                        development.
                                        My
                                        skills are rooted in a diverse programming background.</p><br>
                                    <p>I value the quality of my code and focus on honing my skills in system
                                        architecture
                                        design and writing algorithms to solve different problems through various Design
                                        Patterns.</p><br>
                                    <p>The "CPAS Talent Diagnostic Report" underscores my strengths in innovation,
                                        independence,
                                        and analytical thinking, essential for addressing the tech industry's challenges
                                        with
                                        confidence.</p>
                                </v-card-text>
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-card flat id="experiences" min-height="100vh" class="d-flex flex-column justify-space-between background-4"
            :class="lgAndUp ? 'px-16' : 'px-4'">
            <v-container class="pa-0 ma-auto" style="max-width: 1440px;">
                <v-row class="my-16 fade-in">
                    <span class="ma-auto text-center text-h4 font-weight-black"
                        style="text-decoration: underline; text-decoration-color: #F48FB1; text-underline-offset: 20px;">
                        Experiences
                    </span>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-container>
                        <v-hover>
                            <template #default="{ isHovering, props }">
                                <v-card :height="lgAndUp ? '400' : 'undefined'"
                                    class="ma-5 mt-0 rounded-xl cursor-default" v-bind="props" hover>
                                    <v-row no-gutters class="fill-height">
                                        <v-col v-if="mdAndDown" cols="12" lg="8" class="d-flex justify-center">
                                            <v-card class="bg-transparent d-flex justify-center pa-5"
                                                style="width: 100%;">
                                                <v-container class="ma-auto">
                                                    <v-img width="250" src="/ntnu.png" class="ma-auto"></v-img>
                                                </v-container>
                                                <v-overlay :model-value="isHovering" class="align-center justify-center"
                                                    scrim="black" contained>
                                                    <v-slide-x-transition mode="in-out">
                                                        <v-container v-if="isHovering">

                                                        </v-container>
                                                    </v-slide-x-transition>
                                                </v-overlay>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="12" lg="4"
                                            class="bg-pink-lighten-2 d-flex justify-center align-center">
                                            <v-card flat class="bg-transparent pa-5">
                                                <v-card-title class="text-wrap">國立臺灣師範大學教育政策與行政研究所</v-card-title>
                                                <v-card-subtitle class="text-wrap">全端工程師</v-card-subtitle>
                                                <v-card-text>
                                                    使用現代前後端框架Laravel及Vue,建制及維護教育支持系統。
                                                    專任助理(資訊類約用人員)網頁程式開發及研究、功能開發、資料庫維護、定期開發進度報告
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                        <v-col v-if="!mdAndDown" cols="12" lg="8" class="d-flex justify-center">
                                            <v-card class="bg-transparent d-flex justify-center pa-5"
                                                style="width: 100%;">
                                                <v-container class="ma-auto">
                                                    <v-img width="250" src="/ntnu.png" class="ma-auto"></v-img>
                                                </v-container>
                                                <v-overlay :model-value="isHovering" class="align-center justify-center"
                                                    scrim="black" contained>
                                                    <v-slide-x-transition mode="in-out">
                                                        <v-container v-if="isHovering">

                                                        </v-container>
                                                    </v-slide-x-transition>
                                                </v-overlay>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-container>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-container>
                        <v-hover>
                            <template #default="{ isHovering, props }">
                                <v-card :height="lgAndUp ? '400' : 'undefined'"
                                    class="ma-5 mb-10 rounded-xl cursor-default" v-bind="props" hover>
                                    <v-row no-gutters class="fill-height">
                                        <v-col cols="12" lg="8" class="d-flex justify-center">
                                            <v-card class="bg-transparent d-flex justify-center pa-5"
                                                style="width: 100%;">
                                                <v-container class="ma-auto">
                                                    <v-img width="250" src="/foonyew.png" class="ma-auto"></v-img>
                                                </v-container>
                                                <v-overlay :model-value="isHovering" class="align-center justify-center"
                                                    scrim="black" contained>
                                                    <v-slide-x-transition mode="in-out">
                                                        <v-container v-if="isHovering">

                                                        </v-container>
                                                    </v-slide-x-transition>
                                                </v-overlay>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="12" lg="4"
                                            class="bg-pink-lighten-2 d-flex justify-center align-center">
                                            <v-card flat class="bg-transparent pa-5">
                                                <v-card-title class="text-wrap">Foon Yew High School</v-card-title>
                                                <v-card-subtitle class="text-wrap">Information Resources Department
                                                    staff</v-card-subtitle>
                                                <v-card-text>
                                                    <ul>
                                                        <li>
                                                            資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。
                                                        </li>
                                                        <li>
                                                            軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows
                                                            及各軟體重大補丁更新，維護電腦系統及軟體。
                                                        </li>
                                                        <li>
                                                            硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。
                                                        </li>
                                                        <li>
                                                            網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP
                                                            分配及檢查(從固定IP轉爲DHCP)。
                                                        </li>
                                                    </ul>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-container>
                </v-row>
            </v-container>
        </v-card>

        <v-card flat id="skills" min-height="100vh" class="d-flex flex-column justify-space-between background-3"
            :class="lgAndUp ? 'px-16' : 'px-4'">
            <v-container class="pa-0 ma-auto" style="max-width: 1440px;">
                <v-row class="my-16 fade-in">
                    <span class="ma-auto text-center text-h4"
                        style="text-decoration: underline; text-decoration-color: #F48FB1; text-underline-offset: 20px;">
                        Skills
                    </span>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="4" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-start' : 'justify-center'">
                        <v-card flat color="transparent" class="text-start"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col v-if="!lgAndUp" cols="12" lg="4" class="d-flex justify-center align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <v-card flat color="transparent" :class="lgAndUp ? 'text-end' : 'text-start'"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col v-if="lgAndUp" cols="12" lg="4" class="d-flex justify-start align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="4" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-start' : 'justify-center'">
                        <v-card flat color="transparent" class="text-start"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-sheet id="educations" min-height="100vh" class="d-flex flex-column justify-space-between background-2"
            :class="lgAndUp ? 'px-16' : 'px-4'">
            <v-container class="pa-0 ma-auto" style="max-width: 1440px;">
                <v-row class="my-16 fade-in" :class="lgAndUp ? 'pt-4' : 'pt-10'">
                    <span class="ma-auto text-center text-h4">Academic Background</span>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="4" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-start' : 'justify-center'">
                        <v-card flat color="transparent" class="text-start"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col v-if="!lgAndUp" cols="12" lg="4" class="d-flex justify-center align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <v-card flat color="transparent" :class="lgAndUp ? 'text-end' : 'text-start'"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col v-if="lgAndUp" cols="12" lg="4" class="d-flex justify-start align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="4" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-start' : 'justify-center'">
                        <v-card flat color="transparent" class="text-start"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

        <v-sheet id="projects" min-height="100vh" class="d-flex flex-column justify-space-between background-1"
            :class="lgAndUp ? 'px-16' : 'px-4'">
            <v-container class="pa-0 ma-auto" style="max-width: 1440px;">
                <v-row class="my-16 fade-in" :class="lgAndUp ? 'pt-4' : 'pt-10'">
                    <span class="ma-auto text-center text-h4">Projects</span>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="4" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-start' : 'justify-center'">
                        <v-card flat color="transparent" class="text-start"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col v-if="!lgAndUp" cols="12" lg="4" class="d-flex justify-center align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <v-card flat color="transparent" :class="lgAndUp ? 'text-end' : 'text-start'"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col v-if="lgAndUp" cols="12" lg="4" class="d-flex justify-start align-center">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                </v-row>

                <v-row class="fade-in" :class="{ 'ma-16': lgAndUp }">
                    <v-col cols="12" lg="4" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-end' : 'justify-center'">
                        <div class="avatar-square">
                            <img @mousedown.prevent src="/dinosaur.jpg" />
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" class="d-flex align-center"
                        :class="lgAndUp ? 'justify-start' : 'justify-center'">
                        <v-card flat color="transparent" class="text-start"
                            :width="lgAndUp ? '70%' : (mdAndUp ? '50%' : '90%')">
                            <v-card-title>123</v-card-title>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet> -->

        <v-fab @click="handleScrollTo()" class="me-4" icon="mdi-arrow-up" location="top end" absolute offset></v-fab>
    </v-main>
</template>

<script>
import BaseComponent from "@/components/BaseComponent.vue"
import { useDisplay } from "vuetify"

export default {
    setup() {
        const { lgAndUp, mdAndUp, mdAndDown, smAndDown } = useDisplay()

        return {
            lgAndUp,
            mdAndUp,
            mdAndDown,
            smAndDown,
        }
    },
    components: {
        BaseComponent,
    },
    data() {
        return {
            homeMenu: false,
            drawer: false,
            scale: 1,
            videoPadding: 0,
            isVideoPlaying: false,
        }
    },
    methods: {
        async handleScroll() {
            this.scale = Math.min(1 + window.scrollY * 0.0006, 1.4)
            const elements = document.querySelectorAll(".fade-in")
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                const position = element.getBoundingClientRect()

                if (position.top < window.innerHeight && position.bottom >= 0) {
                    await new Promise((resolve) => setTimeout(resolve, 100))
                    element.classList.add("active")
                } else {
                    element.classList.remove("active")
                }
            }
        },
        handleScrollTo(target = "top", drawer = false) {
            if (drawer) this.drawer = false
            if (target === "top") {
                if (this.homeMenu) this.homeMenu = false
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            } else {
                window.scrollTo({
                    top: document.querySelector(`#${target}`).offsetTop - 64,
                    behavior: "smooth",
                })
            }
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    },
}
</script>

<style lang="scss" scoped>
.underline-shorter {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
}

.underline-shorter::after {
    content: "";
    position: absolute;
    bottom: -1.15rem;
    left: 0;
    right: 0;
    width: 50%;
    margin: 0 auto;
    height: 0.3rem;
    background-color: #f48fb1;
    border-radius: 0.3rem;
}

.avatar {
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    border: 5px white solid;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);

    img {
        width: 100%;
        height: auto;
    }
}

.avatar-square {
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    border: 5px white solid;
    border-radius: 10%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);

    img {
        width: 100%;
        height: auto;
    }
}

.floating {
    animation: float 6s ease-in-out infinite;
}

.floating-box {
    animation: floatWithoutShadow 3s ease-in-out infinite;
}

/* CSS */
.fade-in {
    opacity: 0;
    transform: translateY(-32px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

/* 滾動到視窗範圍內時啟動動畫 */
.fade-in.active {
    opacity: 1;
    transform: translateY(0);
}

@keyframes float {
    0% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
    }

    50% {
        box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
        transform: translatey(-20px);
    }

    100% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
    }
}

@keyframes floatWithoutShadow {
    0% {
        transform: translatey(0px);
    }

    50% {
        transform: translatey(-16px);
    }

    100% {
        transform: translatey(0px);
    }
}
</style>
