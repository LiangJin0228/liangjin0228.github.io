<template>
    <v-app-bar :color="$vuetify.theme.current.dark ? 'black' : 'white'" :elevation="6" order="1"
        style="position: fixed; opacity: 0.9;" scroll-behavior="hide elevate inverted"
        :scroll-threshold="!smAndDown ? innerHeight * 1.3 - 64 : innerHeight * 2 - 64">
        <template v-if="!smAndDown">
            <v-container class="d-flex justify-space-between align-center" style="max-width: 1280px">
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
                        <v-list-item @click="handleScrollTo('experiences')">
                            <v-list-item-title>Experiences</v-list-item-title>
                        </v-list-item>
                        <!-- <v-list-item @click="handleScrollTo('educations')">
                            <v-list-item-title>Academic Background</v-list-item-title>
                        </v-list-item> -->
                        <!-- <v-list-item @click="handleScrollTo('projects')">
                            <v-list-item-title>Projects</v-list-item-title>
                        </v-list-item> -->
                    </v-list>
                </v-menu>
                <v-btn to="/Resume">Resume</v-btn>
                <v-btn to="/Contact">Contact Me</v-btn>
                <v-switch inset hide-details v-model="isLightTheme" true-icon="mdi-white-balance-sunny"
                    false-icon="mdi-power-sleep" @update:modelValue="toggleTheme" class="px-4"></v-switch>
            </v-container>
        </template>
        <template v-else>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>

    <v-navigation-drawer width="200" v-if="smAndDown" v-model="drawer" location="right" style="position: fixed">
        <v-list>
            <v-list-item>
                <v-container fluid class="pa-0 d-flex">
                    <v-switch inset hide-details v-model="isLightTheme" true-icon="mdi-white-balance-sunny"
                        false-icon="mdi-power-sleep" @update:modelValue="toggleTheme"></v-switch>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" icon="mdi-close" @click="drawer = false"></v-btn>
                </v-container>
            </v-list-item>
            <v-list-item @click="handleScrollTo('top', true)">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('about-me', true)">
                <v-list-item-title>About Me</v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleScrollTo('experiences', true)">
                <v-list-item-title>Experiences</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item @click="handleScrollTo('educations', true)">
                <v-list-item-title>Academic Background</v-list-item-title>
            </v-list-item> -->
            <!-- <v-list-item @click="handleScrollTo('projects', true)">
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
        <v-sheet class="video-container" :height="!smAndDown ? '130vh' : '200vh'">
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
                    <p class="text-h1 text-white font-weight-black mb-2">Hej!</p>
                    <p class="text-h5 text-white">
                        I'm
                        <span class="font-weight-black text-pink-lighten-3">
                            Full-stack
                            <span class="cursor-pointer" @click="handleScrollTo('about-me')">{developer}</span>
                        </span>
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
                <v-btn class="floating-wihtout-shadow" @click="handleScrollTo('about-me')" color="white" variant="text"
                    icon="mdi-arrow-down"></v-btn>
            </v-container>
        </v-sheet>

        <BaseComponent baseId="about-me">
            <v-row>
                <v-col class="d-flex justify-center">
                    <h3 class="underline-shorter text-h3 text-center font-weight-bold fade-in">
                        About Me
                    </h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center mb-5">
                    <i class="text-subtitle-1 text-center text-grey fade-in">
                        <b class="text-primary font-weight-bold">Malaysian</b>
                        working as an engineer in
                        <b class="text-primary font-weight-bold">Taiwan</b>.
                    </i>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-card flat color="transparent">
                        <v-card-title class="text-h4 text-wrap fade-in">
                            Liang Jin <span class="text-primary">Tan</span>(陳亮憬)
                        </v-card-title>
                        <v-card-text class="text-subtitle-1">
                            <span class="fade-in">
                                From Malaysia to Taiwan, I am a full-stack developer passionate about technology and
                                problem-solving, with a broad expertise spanning front-end to back-end development. My
                                skills are rooted in a diverse programming background.
                                <br><br>
                            </span>

                            <span class="fade-in">
                                I value the quality of my code and focus on honing my skills in system architecture
                                design
                                and writing algorithms to solve different problems through various Design Patterns.
                                <br><br>
                            </span>

                            <span class="fade-in">
                                The "CPAS Talent Diagnostic Report" underscores my strengths in innovation,
                                independence,
                                and analytical thinking, essential for addressing the tech industry's challenges with
                                confidence.
                                <br><br>
                            </span>

                            <div class="fade-in">
                                <v-btn size="large" color="primary" @click="handleScrollTo('experiences')">
                                    My Experiences
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card flat color="transparent">
                        <v-card-title class="text-h4 text-wrap fade-in">My toolkit</v-card-title>
                        <v-card-text>
                            <span v-for="toolkit in myToolkitChip" :key="toolkit" class="fade-in" @mousedown.prevent>
                                <v-chip size="x-large" rounded="0" class="ma-1 text-subtitle-1 rounded-lg">
                                    {{ toolkit }}
                                </v-chip>
                            </span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </BaseComponent>

        <BaseComponent baseId="experiences">
            <v-row>
                <v-col class="d-flex justify-center">
                    <h3 class="underline-shorter text-h3 text-center font-weight-bold fade-in">
                        Experiences
                    </h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" class="d-flex justify-start align-end">
                    <v-card flat class="bg-transparent">
                        <v-card-title class="text-h4 text-start text-wrap fade-in">Full-stack developer</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" class="d-flex justify-end align-end">
                    <v-card flat class="bg-transparent">
                        <v-card-title class="text-subtitle-1 text-end text-wrap text-grey fade-in">
                            National Taiwan Normal University
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col id="ntnu-banner" :style="`transform: scale(${ntnuBannerScale});`">
                    <div class="fade-in">
                        <v-container fluid>
                            <v-card flat href="https://www.ntnu.edu.tw/" target="_blank"
                                class="bg-white rounded-xl d-flex pa-5 px-16">
                                <v-container>
                                    <v-img width="50%" src="/ntnu-banner.png" class="ma-auto"></v-img>
                                </v-container>
                            </v-card>
                        </v-container>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-container :class="{ 'pt-16': smAndUp }">
                        <div class="fade-in my-10">
                            <h4 class="text-h4 text-end text-wrap fade-in">Dev Tools</h4>
                        </div>
                        <div class="fade-in mb-14" :class="{ 'mt-16 pt-16': smAndUp }">
                            <v-card href="https://laravel.com/" target="_blank" rounded="xl" hover>
                                <div class="pt-10 fade-in d-flex justify-center">
                                    <svg width="120px" viewBox="0 -.11376601 49.74245785 51.31690859"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                                            fill="#ff2d20" />
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Laravel</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in laravel-gradient-text gradient-text">
                                    Laravel is a web application framework with expressive, elegant syntax. We’ve
                                    already laid the foundation — freeing you to create without sweating the small
                                    things.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in mb-14">
                            <v-card href="https://www.php.net/" target="_blank" rounded="xl" hover>
                                <div class="pt-7 fade-in d-flex justify-center">
                                    <svg id="svg3430" version="1.1" viewBox="0 0 711.20123 383.5975" width="120px"
                                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:cc="http://creativecommons.org/ns#"
                                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                                        xmlns:svg="http://www.w3.org/2000/svg">
                                        <defs id="defs3434">
                                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3444">
                                                <path
                                                    d="M 11.52,162 C 11.52,81.677 135.307,16.561 288,16.561 l 0,0 c 152.693,0 276.481,65.116 276.481,145.439 l 0,0 c 0,80.322 -123.788,145.439 -276.481,145.439 l 0,0 C 135.307,307.439 11.52,242.322 11.52,162"
                                                    id="path3446" />
                                            </clipPath>
                                            <radialGradient cx="0" cy="0" fx="0" fy="0"
                                                gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)"
                                                gradientUnits="userSpaceOnUse" id="radialGradient3452" r="1"
                                                spreadMethod="pad">
                                                <stop id="stop3454" offset="0"
                                                    style="stop-opacity:1;stop-color:#aeb2d5" />
                                                <stop id="stop3456" offset="0.3"
                                                    style="stop-opacity:1;stop-color:#aeb2d5" />
                                                <stop id="stop3458" offset="0.75"
                                                    style="stop-opacity:1;stop-color:#484c89" />
                                                <stop id="stop3460" offset="1"
                                                    style="stop-opacity:1;stop-color:#484c89" />
                                            </radialGradient>
                                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3468">
                                                <path d="M 0,324 576,324 576,0 0,0 0,324 Z" id="path3470" />
                                            </clipPath>
                                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3480">
                                                <path d="M 0,324 576,324 576,0 0,0 0,324 Z" id="path3482" />
                                            </clipPath>
                                        </defs>
                                        <g id="g3438" transform="matrix(1.25,0,0,-1.25,-4.4,394.29875)">
                                            <g id="g3440">
                                                <g clip-path="url(#clipPath3444)" id="g3442">
                                                    <g id="g3448">
                                                        <g id="g3450">
                                                            <path
                                                                d="M 11.52,162 C 11.52,81.677 135.307,16.561 288,16.561 l 0,0 c 152.693,0 276.481,65.116 276.481,145.439 l 0,0 c 0,80.322 -123.788,145.439 -276.481,145.439 l 0,0 C 135.307,307.439 11.52,242.322 11.52,162"
                                                                id="path3462"
                                                                style="fill:url(#radialGradient3452);stroke:none" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="g3464">
                                                <g clip-path="url(#clipPath3468)" id="g3466">
                                                    <g id="g3472" transform="translate(288,27.3594)">
                                                        <path
                                                            d="M 0,0 C 146.729,0 265.68,60.281 265.68,134.641 265.68,209 146.729,269.282 0,269.282 -146.729,269.282 -265.68,209 -265.68,134.641 -265.68,60.281 -146.729,0 0,0"
                                                            id="path3474"
                                                            style="fill:#777bb3;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="g3476">
                                                <g clip-path="url(#clipPath3480)" id="g3478">
                                                    <g id="g3484" transform="translate(161.7344,145.3066)">
                                                        <path
                                                            d="m 0,0 c 12.065,0 21.072,2.225 26.771,6.611 5.638,4.341 9.532,11.862 11.573,22.353 1.903,9.806 1.178,16.653 -2.154,20.348 C 32.783,53.086 25.417,55 14.297,55 L -4.984,55 -15.673,0 0,0 Z m -63.063,-67.75 c -0.895,0 -1.745,0.4 -2.314,1.092 -0.57,0.691 -0.801,1.601 -0.63,2.48 L -37.679,81.573 C -37.405,82.982 -36.17,84 -34.734,84 L 26.32,84 C 45.508,84 59.79,78.79 68.767,68.513 77.792,58.182 80.579,43.741 77.05,25.592 75.614,18.198 73.144,11.331 69.709,5.183 66.27,-0.972 61.725,-6.667 56.198,-11.747 49.582,-17.939 42.094,-22.429 33.962,-25.071 25.959,-27.678 15.681,-29 3.414,-29 l -24.722,0 -7.06,-36.322 c -0.274,-1.41 -1.508,-2.428 -2.944,-2.428 l -31.751,0 z"
                                                            id="path3486"
                                                            style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                    <g id="g3488" transform="translate(159.2236,197.3071)">
                                                        <path
                                                            d="m 0,0 16.808,0 c 13.421,0 18.083,-2.945 19.667,-4.7 2.628,-2.914 3.124,-9.058 1.435,-17.767 C 36.012,-32.217 32.494,-39.13 27.452,-43.012 22.29,-46.986 13.898,-49 2.511,-49 L -9.523,-49 0,0 Z m 28.831,35 -61.055,0 c -2.872,0 -5.341,-2.036 -5.889,-4.855 l -28.328,-145.751 c -0.342,-1.759 0.12,-3.578 1.259,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.75,0 c 2.873,0 5.342,2.036 5.89,4.855 l 6.588,33.895 22.249,0 c 12.582,0 23.174,1.372 31.479,4.077 8.541,2.775 16.399,7.48 23.354,13.984 5.752,5.292 10.49,11.232 14.08,17.657 3.591,6.427 6.171,13.594 7.668,21.302 3.715,19.104 0.697,34.402 -8.969,45.466 C 63.965,29.444 48.923,35 28.831,35 m -45.633,-90 19.313,0 c 12.801,0 22.336,2.411 28.601,7.234 6.266,4.824 10.492,12.875 12.688,24.157 2.101,10.832 1.144,18.476 -2.871,22.929 C 36.909,3.773 28.87,6 16.808,6 L -4.946,6 -16.802,-55 M 28.831,29 C 47.198,29 60.597,24.18 69.019,14.539 77.44,4.898 79.976,-8.559 76.616,-25.836 75.233,-32.953 72.894,-39.46 69.601,-45.355 66.304,-51.254 61.999,-56.648 56.679,-61.539 50.339,-67.472 43.296,-71.7 35.546,-74.218 27.796,-76.743 17.925,-78 5.925,-78 l -27.196,0 -7.531,-38.75 -31.75,0 28.328,145.75 61.055,0"
                                                            id="path3490"
                                                            style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                    <g id="g3492" transform="translate(311.583,116.3066)">
                                                        <path
                                                            d="m 0,0 c -0.896,0 -1.745,0.4 -2.314,1.092 -0.571,0.691 -0.802,1.6 -0.631,2.48 L 9.586,68.061 C 10.778,74.194 10.484,78.596 8.759,80.456 7.703,81.593 4.531,83.5 -4.848,83.5 L -27.55,83.5 -43.305,2.428 C -43.579,1.018 -44.814,0 -46.25,0 l -31.5,0 c -0.896,0 -1.745,0.4 -2.315,1.092 -0.57,0.691 -0.801,1.601 -0.63,2.48 l 28.328,145.751 c 0.274,1.409 1.509,2.427 2.945,2.427 l 31.5,0 c 0.896,0 1.745,-0.4 2.315,-1.091 0.57,-0.692 0.801,-1.601 0.63,-2.481 L -21.813,113 2.609,113 c 18.605,0 31.221,-3.28 38.569,-10.028 7.49,-6.884 9.827,-17.891 6.947,-32.719 L 34.945,2.428 C 34.671,1.018 33.437,0 32,0 L 0,0 Z"
                                                            id="path3494"
                                                            style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                    <g id="g3496" transform="translate(293.6611,271.0571)">
                                                        <path
                                                            d="m 0,0 -31.5,0 c -2.873,0 -5.342,-2.036 -5.89,-4.855 l -28.328,-145.751 c -0.342,-1.759 0.12,-3.578 1.26,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.5,0 c 2.872,0 5.342,2.036 5.89,4.855 l 15.283,78.645 20.229,0 c 9.363,0 11.328,-2 11.407,-2.086 0.568,-0.611 1.315,-3.441 0.082,-9.781 l -12.531,-64.489 c -0.342,-1.759 0.12,-3.578 1.26,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 32,0 c 2.872,0 5.342,2.036 5.89,4.855 l 13.179,67.825 c 3.093,15.921 0.447,27.864 -7.861,35.5 -7.928,7.281 -21.208,10.82 -40.599,10.82 l -20.784,0 6.143,31.605 C 6.231,-5.386 5.77,-3.566 4.63,-2.184 3.49,-0.801 1.792,0 0,0 m 0,-6 -7.531,-38.75 28.062,0 c 17.657,0 29.836,-3.082 36.539,-9.238 6.703,-6.16 8.711,-16.141 6.032,-29.938 l -13.18,-67.824 -32,0 12.531,64.488 c 1.426,7.336 0.902,12.34 -1.574,15.008 -2.477,2.668 -7.746,4.004 -15.805,4.004 l -25.176,0 -16.226,-83.5 -31.5,0 L -31.5,-6 0,-6"
                                                            id="path3498"
                                                            style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                    <g id="g3500" transform="translate(409.5498,145.3066)">
                                                        <path
                                                            d="m 0,0 c 12.065,0 21.072,2.225 26.771,6.611 5.638,4.34 9.532,11.861 11.574,22.353 1.903,9.806 1.178,16.653 -2.155,20.348 C 32.783,53.086 25.417,55 14.297,55 L -4.984,55 -15.673,0 0,0 Z m -63.062,-67.75 c -0.895,0 -1.745,0.4 -2.314,1.092 -0.57,0.691 -0.802,1.601 -0.631,2.48 L -37.679,81.573 C -37.404,82.982 -36.17,84 -34.733,84 L 26.32,84 C 45.509,84 59.79,78.79 68.768,68.513 77.793,58.183 80.579,43.742 77.051,25.592 75.613,18.198 73.144,11.331 69.709,5.183 66.27,-0.972 61.725,-6.667 56.198,-11.747 49.582,-17.939 42.094,-22.429 33.962,-25.071 25.959,-27.678 15.681,-29 3.414,-29 l -24.723,0 -7.057,-36.322 c -0.275,-1.41 -1.509,-2.428 -2.946,-2.428 l -31.75,0 z"
                                                            id="path3502"
                                                            style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                    <g id="g3504" transform="translate(407.0391,197.3071)">
                                                        <path
                                                            d="M 0,0 16.808,0 C 30.229,0 34.891,-2.945 36.475,-4.7 39.104,-7.614 39.6,-13.758 37.91,-22.466 36.012,-32.217 32.493,-39.13 27.452,-43.012 22.29,-46.986 13.898,-49 2.511,-49 L -9.522,-49 0,0 Z m 28.831,35 -61.054,0 c -2.872,0 -5.341,-2.036 -5.889,-4.855 L -66.44,-115.606 c -0.342,-1.759 0.12,-3.578 1.259,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.75,0 c 2.872,0 5.342,2.036 5.89,4.855 l 6.587,33.895 22.249,0 c 12.582,0 23.174,1.372 31.479,4.077 8.541,2.775 16.401,7.481 23.356,13.986 5.752,5.291 10.488,11.23 14.078,17.655 3.591,6.427 6.171,13.594 7.668,21.302 3.715,19.105 0.697,34.403 -8.969,45.467 C 63.965,29.444 48.924,35 28.831,35 m -45.632,-90 19.312,0 c 12.801,0 22.336,2.411 28.601,7.234 6.267,4.824 10.492,12.875 12.688,24.157 2.102,10.832 1.145,18.476 -2.871,22.929 C 36.909,3.773 28.87,6 16.808,6 L -4.946,6 -16.801,-55 M 28.831,29 C 47.198,29 60.597,24.18 69.019,14.539 77.441,4.898 79.976,-8.559 76.616,-25.836 75.233,-32.953 72.894,-39.46 69.601,-45.355 66.304,-51.254 61.999,-56.648 56.679,-61.539 50.339,-67.472 43.296,-71.7 35.546,-74.218 27.796,-76.743 17.925,-78 5.925,-78 l -27.196,0 -7.53,-38.75 -31.75,0 28.328,145.75 61.054,0"
                                                            id="path3506"
                                                            style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">PHP</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in php-gradient-text gradient-text">
                                    A popular general-purpose scripting language that is especially suited to web
                                    development. Fast, flexible and pragmatic, PHP powers everything from your blog to
                                    the most popular websites in the world.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in mb-14">
                            <v-card href="https://www.kernel.org/" target="_blank" rounded="xl" hover>
                                <div class="pt-7 fade-in d-flex justify-center">
                                    <svg width="120px" version="1.1" viewBox="0 0 216 256"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs id="tux_fx">
                                            <linearGradient id="gradient_belly_shadow">
                                                <stop offset="0" stop-color="#000000" />
                                                <stop offset="1" stop-color="#000000" stop-opacity="0.25" />
                                            </linearGradient>
                                            <linearGradient id="gradient_wing_tip_right_shadow">
                                                <stop offset="0" stop-color="#110800" />
                                                <stop offset="0.59" stop-color="#a65a00" stop-opacity="0.8" />
                                                <stop offset="1" stop-color="#ff921e" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient_wing_tip_right_glare_1">
                                                <stop offset="0" stop-color="#7c7c7c" />
                                                <stop offset="1" stop-color="#7c7c7c" stop-opacity="0.33" />
                                            </linearGradient>
                                            <linearGradient id="gradient_wing_tip_right_glare_2">
                                                <stop offset="0" stop-color="#7c7c7c" />
                                                <stop offset="1" stop-color="#7c7c7c" stop-opacity="0.33" />
                                            </linearGradient>
                                            <linearGradient id="gradient_foot_left_layer_1">
                                                <stop offset="0" stop-color="#b98309" />
                                                <stop offset="1" stop-color="#382605" />
                                            </linearGradient>
                                            <linearGradient id="gradient_foot_left_glare">
                                                <stop offset="0" stop-color="#ebc40c" />
                                                <stop offset="1" stop-color="#ebc40c" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient_foot_right_shadow">
                                                <stop offset="0" stop-color="#000000" />
                                                <stop offset="1" stop-color="#000000" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient_foot_right_layer_1">
                                                <stop offset="0" stop-color="#3e2a06" />
                                                <stop offset="1" stop-color="#ad780a" />
                                            </linearGradient>
                                            <linearGradient id="gradient_foot_right_glare">
                                                <stop offset="0" stop-color="#f3cd0c" />
                                                <stop offset="1" stop-color="#f3cd0c" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient_eyeball">
                                                <stop offset="0" stop-color="#fefefc" />
                                                <stop offset="0.75" stop-color="#fefefc" />
                                                <stop offset="1" stop-color="#d4d4d4" />
                                            </linearGradient>
                                            <linearGradient id="gradient_pupil_left_glare">
                                                <stop offset="0" stop-color="#757574" stop-opacity="0" />
                                                <stop offset="0.25" stop-color="#757574" />
                                                <stop offset="0.5" stop-color="#757574" />
                                                <stop offset="1" stop-color="#757574" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient_pupil_right_glare_2">
                                                <stop offset="0" stop-color="#949494" stop-opacity="0.39" />
                                                <stop offset="0.5" stop-color="#949494" />
                                                <stop offset="1" stop-color="#949494" stop-opacity="0.39" />
                                            </linearGradient>
                                            <linearGradient id="gradient_eyelid_left">
                                                <stop offset="0" stop-color="#c8c8c8" />
                                                <stop offset="1" stop-color="#797978" />
                                            </linearGradient>
                                            <linearGradient id="gradient_eyelid_right">
                                                <stop offset="0" stop-color="#747474" />
                                                <stop offset="0.13" stop-color="#8c8c8c" />
                                                <stop offset="0.25" stop-color="#a4a4a4" />
                                                <stop offset="0.5" stop-color="#d4d4d4" />
                                                <stop offset="0.62" stop-color="#d4d4d4" />
                                                <stop offset="1" stop-color="#7c7c7c" />
                                            </linearGradient>
                                            <linearGradient id="gradient_eyebrow">
                                                <stop offset="0" stop-color="#646464" stop-opacity="0" />
                                                <stop offset="0.31" stop-color="#646464" stop-opacity="0.58" />
                                                <stop offset="0.47" stop-color="#646464" />
                                                <stop offset="0.73" stop-color="#646464" stop-opacity="0.26" />
                                                <stop offset="1" stop-color="#646464" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient_beak_base">
                                                <stop offset="0" stop-color="#020204" />
                                                <stop offset="0.73" stop-color="#020204" />
                                                <stop offset="1" stop-color="#5c5c5c" />
                                            </linearGradient>
                                            <linearGradient id="gradient_mandible_lower">
                                                <stop offset="0" stop-color="#d2940a" />
                                                <stop offset="0.75" stop-color="#d89c08" />
                                                <stop offset="0.87" stop-color="#b67e07" />
                                                <stop offset="1" stop-color="#946106" />
                                            </linearGradient>
                                            <linearGradient id="gradient_mandible_upper">
                                                <stop offset="0" stop-color="#ad780a" />
                                                <stop offset="0.12" stop-color="#d89e08" />
                                                <stop offset="0.25" stop-color="#edb80b" />
                                                <stop offset="0.39" stop-color="#ebc80d" />
                                                <stop offset="0.53" stop-color="#f5d838" />
                                                <stop offset="0.77" stop-color="#f6d811" />
                                                <stop offset="1" stop-color="#f5cd31" />
                                            </linearGradient>
                                            <linearGradient id="gradient_nares">
                                                <stop offset="0" stop-color="#3a2903" />
                                                <stop offset="0.55" stop-color="#735208" />
                                                <stop offset="1" stop-color="#ac8c04" />
                                            </linearGradient>
                                            <linearGradient id="gradient_beak_corner">
                                                <stop offset="0" stop-color="#f5ce2d" />
                                                <stop offset="1" stop-color="#d79b08" />
                                            </linearGradient>
                                            <radialGradient id="fill_belly_shadow_left" href="#gradient_belly_shadow"
                                                xlink:href="#gradient_belly_shadow" gradientUnits="userSpaceOnUse"
                                                cx="0" cy="0" r="1"
                                                gradientTransform="translate(61.18,121.19) scale(19,18)" />
                                            <radialGradient id="fill_belly_shadow_right" href="#gradient_belly_shadow"
                                                xlink:href="#gradient_belly_shadow" gradientUnits="userSpaceOnUse"
                                                cx="0" cy="0" r="1"
                                                gradientTransform="translate(125.74,131.6) scale(23.6,18)" />
                                            <radialGradient id="fill_belly_shadow_middle" href="#gradient_belly_shadow"
                                                xlink:href="#gradient_belly_shadow" gradientUnits="userSpaceOnUse"
                                                cx="0" cy="0" r="1"
                                                gradientTransform="translate(94.21,127.47) scale(9.35,10)" />
                                            <linearGradient id="fill_foot_left_base" href="#gradient_foot_left_layer_1"
                                                xlink:href="#gradient_foot_left_layer_1" gradientUnits="userSpaceOnUse"
                                                x1="23.18" y1="193.01" x2="64.31" y2="262.02" />
                                            <linearGradient id="fill_foot_left_glare" href="#gradient_foot_left_glare"
                                                xlink:href="#gradient_foot_left_glare" gradientUnits="userSpaceOnUse"
                                                x1="64.47" y1="210.83" x2="77.41" y2="235.21" />
                                            <linearGradient id="fill_foot_right_shadow"
                                                href="#gradient_foot_right_shadow"
                                                xlink:href="#gradient_foot_right_shadow" gradientUnits="userSpaceOnUse"
                                                x1="146.93" y1="211.96" x2="150.2" y2="235.73" />
                                            <linearGradient id="fill_foot_right_base"
                                                href="#gradient_foot_right_layer_1"
                                                xlink:href="#gradient_foot_right_layer_1" gradientUnits="userSpaceOnUse"
                                                x1="151.5" y1="253.02" x2="192.94" y2="185.84" />
                                            <linearGradient id="fill_foot_right_glare" href="#gradient_foot_right_glare"
                                                xlink:href="#gradient_foot_right_glare" gradientUnits="userSpaceOnUse"
                                                x1="162.81" y1="180.67" x2="161.59" y2="191.64" />
                                            <radialGradient id="fill_wing_tip_right_shadow_lower"
                                                href="#gradient_wing_tip_right_shadow"
                                                xlink:href="#gradient_wing_tip_right_shadow"
                                                gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1"
                                                gradientTransform="translate(169.71,194.53) rotate(15) scale(19.66,20.64)" />
                                            <radialGradient id="fill_wing_tip_right_shadow_upper"
                                                href="#gradient_wing_tip_right_shadow"
                                                xlink:href="#gradient_wing_tip_right_shadow"
                                                gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1"
                                                gradientTransform="translate(169.71,189.89) rotate(-2.42) scale(19.74,14.86)" />
                                            <radialGradient id="fill_wing_tip_right_glare_1"
                                                href="#gradient_wing_tip_right_glare_1"
                                                xlink:href="#gradient_wing_tip_right_glare_1"
                                                gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1"
                                                gradientTransform="translate(184.65,176.62) rotate(23.5) scale(6.95,3.21)" />
                                            <linearGradient id="fill_wing_tip_right_glare_2"
                                                href="#gradient_wing_tip_right_glare_2"
                                                xlink:href="#gradient_wing_tip_right_glare_2"
                                                gradientUnits="userSpaceOnUse" x1="165.69" y1="173.58" x2="168.27"
                                                y2="173.47" />
                                            <radialGradient id="fill_eyeball_left" href="#gradient_eyeball"
                                                xlink:href="#gradient_eyeball" gradientUnits="userSpaceOnUse" cx="0"
                                                cy="0" r="1"
                                                gradientTransform="translate(86.49,51.41) rotate(-0.6) scale(10.24,15.68)" />
                                            <linearGradient id="fill_pupil_left_glare" href="#gradient_pupil_left_glare"
                                                xlink:href="#gradient_pupil_left_glare" gradientUnits="userSpaceOnUse"
                                                x1="84.29" y1="46.64" x2="89.32" y2="55.63" />
                                            <radialGradient id="fill_eyelid_left" href="#gradient_eyelid_left"
                                                xlink:href="#gradient_eyelid_left" gradientUnits="userSpaceOnUse" cx="0"
                                                cy="0" r="1"
                                                gradientTransform="translate(84.89,43.74) rotate(-9.35) scale(6.25,5.77)" />
                                            <linearGradient id="fill_eyebrow_left" href="#gradient_eyebrow"
                                                xlink:href="#gradient_eyebrow" gradientUnits="userSpaceOnUse" x1="83.59"
                                                y1="32.51" x2="94.48" y2="43.63" />
                                            <radialGradient id="fill_eyeball_right" href="#gradient_eyeball"
                                                xlink:href="#gradient_eyeball" gradientUnits="userSpaceOnUse" cx="0"
                                                cy="0" r="1"
                                                gradientTransform="translate(118.06,51.41) rotate(-1.8) scale(13.64,15.68)" />
                                            <linearGradient id="fill_pupil_right_glare"
                                                href="#gradient_pupil_right_glare_2"
                                                xlink:href="#gradient_pupil_right_glare_2"
                                                gradientUnits="userSpaceOnUse" x1="117.87" y1="47.25" x2="123.66"
                                                y2="54.11" />
                                            <linearGradient id="fill_eyelid_right" href="#gradient_eyelid_right"
                                                xlink:href="#gradient_eyelid_right" gradientUnits="userSpaceOnUse"
                                                x1="112.9" y1="36.23" x2="131.32" y2="47.01" />
                                            <linearGradient id="fill_eyebrow_right" href="#gradient_eyebrow"
                                                xlink:href="#gradient_eyebrow" gradientUnits="userSpaceOnUse"
                                                x1="119.16" y1="31.56" x2="131.42" y2="43.14" />
                                            <radialGradient id="fill_beak_base" href="#gradient_beak_base"
                                                xlink:href="#gradient_beak_base" gradientUnits="userSpaceOnUse" cx="0"
                                                cy="0" r="1"
                                                gradientTransform="translate(97.64,60.12) rotate(-36) scale(11.44,10.38)" />
                                            <radialGradient id="fill_mandible_lower_base"
                                                href="#gradient_mandible_lower" xlink:href="#gradient_mandible_lower"
                                                gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1"
                                                gradientTransform="translate(109.77,70.61) rotate(-22.4) scale(27.15,19.07)" />
                                            <linearGradient id="fill_mandible_upper_base"
                                                href="#gradient_mandible_upper" xlink:href="#gradient_mandible_upper"
                                                gradientUnits="userSpaceOnUse" x1="78.09" y1="69.26" x2="126.77"
                                                y2="68.88" />
                                            <radialGradient id="fill_naris_left" href="#gradient_nares"
                                                xlink:href="#gradient_nares" gradientUnits="userSpaceOnUse" cx="0"
                                                cy="0" r="1"
                                                gradientTransform="translate(92.11,59.88) scale(1.32,1.42)" />
                                            <radialGradient id="fill_naris_right" href="#gradient_nares"
                                                xlink:href="#gradient_nares" gradientUnits="userSpaceOnUse" cx="0"
                                                cy="0" r="1"
                                                gradientTransform="translate(104.65,59.7) scale(2.78,1.62)" />
                                            <linearGradient id="fill_beak_corner" href="#gradient_beak_corner"
                                                xlink:href="#gradient_beak_corner" gradientUnits="userSpaceOnUse"
                                                x1="126.74" y1="67.49" x2="126.74" y2="71.09" />
                                            <filter id="blur_belly_shadow_left">
                                                <feGaussianBlur stdDeviation="0.64 0.55" />
                                            </filter>
                                            <filter id="blur_belly_shadow_right">
                                                <feGaussianBlur stdDeviation="0.98" />
                                            </filter>
                                            <filter id="blur_belly_shadow_middle">
                                                <feGaussianBlur stdDeviation="0.68" />
                                            </filter>
                                            <filter id="blur_belly_shadow_lower" x="-0.8" width="2.6" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="1.25" />
                                            </filter>
                                            <filter id="blur_belly_glare" x="-0.8" width="2.6" y="-0.5" height="2">
                                                <feGaussianBlur stdDeviation="1.78 2.19" />
                                            </filter>
                                            <filter id="blur_head_glare" x="-0.3" width="1.6" y="-0.3" height="1.6">
                                                <feGaussianBlur stdDeviation="1.73" />
                                            </filter>
                                            <filter id="blur_neck_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
                                                <feGaussianBlur stdDeviation="0.78" />
                                            </filter>
                                            <filter id="blur_wing_left_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="0.98" />
                                            </filter>
                                            <filter id="blur_wing_right_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="1.19 1.17" />
                                            </filter>
                                            <filter id="blur_foot_left_layer_1" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="3.38" />
                                            </filter>
                                            <filter id="blur_foot_left_layer_2">
                                                <feGaussianBlur stdDeviation="2.1 2.06" />
                                            </filter>
                                            <filter id="blur_foot_left_glare">
                                                <feGaussianBlur stdDeviation="0.32" />
                                            </filter>
                                            <filter id="blur_foot_right_shadow">
                                                <feGaussianBlur stdDeviation="1.95 1.9" />
                                            </filter>
                                            <filter id="blur_foot_right_layer_1" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="4.12" />
                                            </filter>
                                            <filter id="blur_foot_right_layer_2" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="3.12 3.37" />
                                            </filter>
                                            <filter id="blur_foot_right_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="0.41" />
                                            </filter>
                                            <filter id="blur_wing_tip_right_shadow_lower" x="-0.3" width="1.6" y="-0.3"
                                                height="1.6">
                                                <feGaussianBlur stdDeviation="2.45" />
                                            </filter>
                                            <filter id="blur_wing_tip_right_shadow_upper" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="1.12 0.81" />
                                            </filter>
                                            <filter id="blur_wing_tip_right_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="0.88" />
                                            </filter>
                                            <filter id="blur_pupil_left_glare" x="-0.3" width="1.6" y="-0.3"
                                                height="1.6">
                                                <feGaussianBlur stdDeviation="0.44" />
                                            </filter>
                                            <filter id="blur_eyebrow_left">
                                                <feGaussianBlur stdDeviation="0.12" />
                                            </filter>
                                            <filter id="blur_pupil_right_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="0.45" />
                                            </filter>
                                            <filter id="blur_eyebrow_right">
                                                <feGaussianBlur stdDeviation="0.13" />
                                            </filter>
                                            <filter id="blur_beak_shadow_lower" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="1.75" />
                                            </filter>
                                            <filter id="blur_beak_shadow_upper">
                                                <feGaussianBlur stdDeviation="0.8 0.74" />
                                            </filter>
                                            <filter id="blur_mandible_lower_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="0.77" />
                                            </filter>
                                            <filter id="blur_mandible_upper_shadow">
                                                <feGaussianBlur stdDeviation="0.65" />
                                            </filter>
                                            <filter id="blur_mandible_upper_glare" x="-0.2" width="1.4" y="-0.2"
                                                height="1.4">
                                                <feGaussianBlur stdDeviation="0.73" />
                                            </filter>
                                            <filter id="blur_naris_left" x="-0.2" width="1.4" y="-0.2" height="1.4">
                                                <feGaussianBlur stdDeviation="0.1" />
                                            </filter>
                                            <filter id="blur_naris_right">
                                                <feGaussianBlur stdDeviation="0.1" />
                                            </filter>
                                            <filter id="blur_beak_corner" x="-0.2" width="1.4" y="-0.2" height="1.4">
                                                <feGaussianBlur stdDeviation="0.23" />
                                            </filter>
                                            <clipPath id="clip_body">
                                                <use href="#body_base" xlink:href="#body_base" />
                                            </clipPath>
                                            <clipPath id="clip_wing_left">
                                                <use href="#wing_left_base" xlink:href="#wing_left_base" />
                                            </clipPath>
                                            <clipPath id="clip_wing_right">
                                                <use href="#wing_right_base" xlink:href="#wing_right_base" />
                                            </clipPath>
                                            <clipPath id="clip_foot_left">
                                                <use href="#foot_left_base" xlink:href="#foot_left_base" />
                                            </clipPath>
                                            <clipPath id="clip_foot_right">
                                                <use href="#foot_right_base" xlink:href="#foot_right_base" />
                                            </clipPath>
                                            <clipPath id="clip_wing_tip_right">
                                                <use href="#wing_tip_right_base" xlink:href="#wing_tip_right_base" />
                                            </clipPath>
                                            <clipPath id="clip_eye_left">
                                                <use href="#eyeball_left" xlink:href="#eyeball_left" />
                                            </clipPath>
                                            <clipPath id="clip_pupil_left">
                                                <use href="#pupil_left_base" xlink:href="#pupil_left_base" />
                                            </clipPath>
                                            <clipPath id="clip_eye_right">
                                                <use href="#eyeball_right" xlink:href="#eyeball_right" />
                                            </clipPath>
                                            <clipPath id="clip_pupil_right">
                                                <use href="#pupil_right_base" xlink:href="#pupil_right_base" />
                                            </clipPath>
                                            <clipPath id="clip_mandible_lower">
                                                <use href="#mandible_lower_base" xlink:href="#mandible_lower_base" />
                                            </clipPath>
                                            <clipPath id="clip_mandible_upper">
                                                <use href="#mandible_upper_base" xlink:href="#mandible_upper_base" />
                                            </clipPath>
                                            <clipPath id="clip_beak">
                                                <use href="#mandible_lower_base" xlink:href="#mandible_lower_base" />
                                                <use href="#mandible_upper_base" xlink:href="#mandible_upper_base" />
                                            </clipPath>
                                        </defs>
                                        <g id="tux">
                                            <g id="body">
                                                <path id="body_base" fill="#020204"
                                                    d="m 106.95,0 c -6,0 -12.02,1.18 -17.46,4.12 -5.78,3.11 -10.52,8.09 -13.43,13.97 -2.92,5.88 -4.06,12.16 -4.24,19.08 -0.33,13.14 0.3,26.92 1.29,39.41 0.26,3.8 0.74,6.02 0.25,9.93 -1.62,8.3 -8.88,13.88 -12.76,21.17 -4.27,8.04 -6.07,17.13 -9.29,25.65 -2.95,7.79 -7.09,15.1 -9.88,22.95 -3.91,10.97 -5.08,23.03 -2.5,34.39 1.97,8.66 6.08,16.78 11.62,23.73 -0.8,1.44 -1.58,2.91 -2.4,4.34 -2.57,4.43 -5.71,8.64 -7.17,13.55 -0.73,2.45 -1.02,5.07 -0.55,7.59 0.47,2.52 1.75,4.93 3.75,6.53 1.31,1.04 2.9,1.72 4.53,2.1 1.63,0.37 3.32,0.46 5,0.43 6.37,-0.14 12.55,-2.07 18.71,-3.69 3.66,-0.96 7.34,-1.81 11.03,-2.58 13.14,-2.69 27.8,-1.61 39.99,0.15 4.13,0.63 8.23,1.44 12.29,2.43 6.36,1.54 12.69,3.5 19.23,3.69 1.72,0.05 3.46,-0.03 5.14,-0.4 1.68,-0.38 3.31,-1.06 4.65,-2.13 2.01,-1.6 3.29,-4.02 3.76,-6.54 0.47,-2.52 0.18,-5.15 -0.56,-7.61 -1.48,-4.92 -4.65,-9.11 -7.27,-13.52 -1.04,-1.75 -2,-3.53 -3.03,-5.28 7.9,-8.87 14.26,-19.13 17.94,-30.4 4.01,-12.3 4.75,-25.55 3.06,-38.38 -1.69,-12.83 -5.76,-25.27 -11.11,-37.05 -6.72,-14.76 -12.37,-20.1 -16.47,-33.07 -4.42,-14.02 -0.77,-30.61 -4.06,-43.32 -1.17,-4.32 -3.04,-8.45 -5.45,-12.23 -2.82,-4.43 -6.4,-8.39 -10.65,-11.47 -6.78,-4.92 -15.3,-7.54 -23.96,-7.54 z" />
                                                <path id="belly" fill="#fdfdfb"
                                                    d="m 83.13,74 c -0.9,1.13 -1.48,2.49 -1.84,3.89 -0.35,1.4 -0.48,2.85 -0.54,4.3 -0.11,2.89 0.07,5.83 -0.7,8.62 -0.82,2.98 -2.65,5.57 -4.44,8.08 -3.11,4.36 -6.25,8.84 -7.78,13.97 -0.93,3.1 -1.24,6.39 -0.91,9.62 -3.47,5.1 -6.48,10.53 -8.98,16.18 -3.78,8.57 -6.37,17.69 -7.28,27.01 -1.12,11.41 0.34,23.15 4.85,33.69 3.25,7.63 8.11,14.6 14.38,20.04 3.18,2.76 6.72,5.11 10.5,6.97 13.11,6.45 29.31,6.46 42.2,-0.41 6.74,-3.59 12.43,-8.84 17.91,-14.15 3.3,-3.2 6.59,-6.48 9.11,-10.32 4.85,-7.41 6.54,-16.41 7.59,-25.2 1.83,-15.36 1.89,-31.6 -4.85,-45.53 -2.32,-4.8 -5.41,-9.22 -9.12,-13.05 -0.98,-6.7 -2.93,-13.27 -5.76,-19.42 -2.05,-4.45 -4.54,-8.68 -6.44,-13.18 -0.78,-1.85 -1.46,-3.75 -2.32,-5.56 -0.87,-1.81 -1.93,-3.55 -3.39,-4.94 -1.48,-1.42 -3.33,-2.43 -5.28,-3.07 -1.95,-0.65 -4.01,-0.94 -6.06,-1.04 -4.11,-0.21 -8.22,0.33 -12.33,0.16 -3.27,-0.13 -6.53,-0.7 -9.8,-0.51 -1.63,0.1 -3.26,0.39 -4.78,1.01 -1.52,0.61 -2.92,1.56 -3.94,2.84 z" />
                                                <g id="body_self_shadows">
                                                    <path id="belly_shadow_left" opacity="0.25"
                                                        fill="url(#fill_belly_shadow_left)"
                                                        filter="url(#blur_belly_shadow_left)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 68.67,115.18 c 0.87,1.31 -0.55,5.84 19.86,2.94 0,0 -3.59,0.39 -7.12,1.21 -5.49,1.84 -10.27,3.89 -13.97,6.61 -3.65,2.7 -6.33,6.21 -9.68,9.22 0,0 5.43,-9.92 6.78,-12.91 1.36,-2.99 -0.22,-2.85 0.85,-7.25 1.07,-4.4 3.69,-8.63 3.69,-8.63 0,0 -2.14,6.22 -0.41,8.81 z" />
                                                    <path id="belly_shadow_right" opacity="0.42"
                                                        fill="url(#fill_belly_shadow_right)"
                                                        filter="url(#blur_belly_shadow_right)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 134.28,113.99 c -4.16,2.9 -6.6,2.56 -11.64,3.12 -5.05,0.57 -18.7,0.36 -18.7,0.36 0,0 1.97,-0.03 6.36,0.78 4.38,0.82 13.31,1.6 18.34,3.51 5.04,1.92 6.87,2.47 9.93,4.4 4.35,2.75 7.55,7.06 11.71,10.08 0,0 0.2,-4 -1.48,-6.99 -1.68,-2.99 -6.2,-7.7 -7.53,-12.1 -1.32,-4.4 -1.96,-13.04 -1.96,-13.04 0,0 -0.88,6.99 -5.03,9.88 z" />
                                                    <path id="belly_shadow_middle" opacity="0.2"
                                                        fill="url(#fill_belly_shadow_middle)"
                                                        filter="url(#blur_belly_shadow_middle)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 95.17,107.81 c -0.16,1.25 -0.36,2.5 -0.6,3.74 -0.12,0.61 -0.26,1.22 -0.48,1.8 -0.23,0.58 -0.56,1.14 -1.02,1.55 -0.41,0.37 -0.9,0.62 -1.4,0.85 -1.94,0.88 -4.01,1.47 -6.12,1.74 0.84,0.06 1.68,0.14 2.53,0.23 0.53,0.06 1.06,0.12 1.57,0.25 0.52,0.14 1.03,0.34 1.46,0.65 0.47,0.35 0.84,0.82 1.12,1.34 0.55,1.02 0.73,2.2 0.83,3.37 0.13,1.48 0.14,2.98 0.03,4.46 0.1,-0.99 0.31,-1.98 0.62,-2.92 0.57,-1.72 1.47,-3.32 2.69,-4.65 0.49,-0.52 1.02,-1.01 1.6,-1.42 1.79,-1.26 4.07,-1.81 6.24,-1.51 -2.21,0.09 -4.44,-0.6 -6.2,-1.93 -0.9,-0.68 -1.68,-1.52 -2.22,-2.5 -0.84,-1.52 -1.08,-3.37 -0.65,-5.05 z" />
                                                    <path id="belly_shadow_lower" opacity="0.11" fill="#000000"
                                                        filter="url(#blur_belly_shadow_lower)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 89.85,137.14 c -1.06,4.03 -1.79,8.15 -2.17,12.31 -0.55,5.87 -0.42,11.78 -0.74,17.67 -0.26,4.99 -0.85,10.04 0.02,14.97 0.41,2.35 1.15,4.64 2.2,6.78 0.16,-0.82 0.29,-1.64 0.36,-2.47 0.37,-4 -0.3,-8.01 -0.53,-12.01 -0.4,-7.02 0.57,-14.04 0.97,-21.06 0.3,-5.39 0.27,-10.8 -0.11,-16.19 z" />
                                                </g>
                                                <g id="body_glare">
                                                    <path id="belly_glare" opacity="0.75" fill="#7c7c7c"
                                                        filter="url(#blur_belly_glare)" clip-path="url(#clip_body)"
                                                        d="m 160.08,131.23 c 1.03,-0.16 7.34,5.21 6.48,7.21 -0.86,1.99 -2.49,0.79 -3.65,0.8 -1.16,0.02 -4.33,1.46 -4.86,0.55 -0.54,-0.91 1.4,-3.03 2.41,-4.81 0.82,-1.43 -1.4,-3.59 -0.38,-3.75 z" />
                                                    <path id="head_glare" fill="#7c7c7c" filter="url(#blur_head_glare)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 121.52,11.12 c -2.21,1.56 -1.25,3.51 -0.3,5.46 0.95,1.96 -2.09,7.59 -2.12,7.83 -0.03,0.24 5.98,-2.85 7.62,-4.87 1.94,-2.37 6.83,3.22 6.56,2.37 0.01,-1.52 -9.55,-12.34 -11.76,-10.79 z" />
                                                    <path id="neck_glare" fill="#838384" filter="url(#blur_neck_glare)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 138.27,76.63 c -1.86,1.7 0.88,4.25 2.17,7.24 0.81,1.86 3.04,4.49 5.2,4.07 1.63,-0.32 2.63,-2.66 2.48,-4.3 -0.3,-3.18 -2.98,-3.93 -4.93,-5.02 -1.54,-0.86 -3.61,-3.18 -4.92,-1.99 z" />
                                                </g>
                                            </g>
                                            <g id="wings">
                                                <g id="wing_left">
                                                    <path id="wing_left_base" fill="#020204"
                                                        d="m 63.98,100.91 c -6.1,6.92 -12.37,13.63 -15.81,21.12 -1.71,3.8 -2.51,7.93 -3.68,11.93 -1.32,4.54 -3.12,8.94 -5.14,13.22 -1.87,3.95 -3.93,7.81 -5.98,11.66 -1.5,2.81 -3.02,5.67 -3.54,8.81 -0.41,2.48 -0.18,5.04 0.46,7.47 0.63,2.43 1.64,4.75 2.79,6.98 4.88,9.55 12.21,17.77 20.89,24.07 3.94,2.85 8.15,5.32 12.58,7.35 2.4,1.09 4.92,2.07 7.56,2.11 1.32,0.03 2.65,-0.19 3.86,-0.72 1.2,-0.53 2.28,-1.38 3,-2.49 0.88,-1.36 1.18,-3.05 1,-4.66 -0.18,-1.61 -0.81,-3.15 -1.65,-4.53 -2.06,-3.38 -5.31,-5.83 -8.44,-8.25 -6.76,-5.23 -13.29,-10.76 -19.55,-16.58 -1.76,-1.65 -3.53,-3.34 -4.76,-5.42 -1.2,-2.02 -1.85,-4.32 -2.29,-6.63 -1.21,-6.33 -0.9,-12.99 1.25,-19.07 0.85,-2.38 1.96,-4.65 3.04,-6.93 1.86,-3.95 3.62,-7.98 6.07,-11.6 3.05,-4.51 7.13,-8.33 9.61,-13.17 2.1,-4.09 2.95,-8.68 3.76,-13.2 0.64,-3.54 1.85,-7 2.47,-10.54 -1.21,2.3 -5.11,6.07 -7.5,9.07 z" />
                                                    <path id="wing_left_glare" opacity="0.95" fill="#7c7c7c"
                                                        filter="url(#blur_wing_left_glare)"
                                                        clip-path="url(#clip_wing_left)"
                                                        d="m 56.96,126.1 c -2,1.84 -3.73,3.97 -5.13,6.31 -2.3,3.84 -3.65,8.16 -5.33,12.31 -1.24,3.09 -2.69,6.2 -2.86,9.53 -0.09,1.71 0.16,3.42 0.22,5.13 0.06,1.71 -0.1,3.49 -0.94,4.98 -0.7,1.25 -1.87,2.23 -3.22,2.71 1.83,0.61 3.45,1.79 4.6,3.33 0.96,1.3 1.58,2.81 2.41,4.18 0.68,1.12 1.51,2.16 2.54,2.97 1.02,0.82 2.25,1.4 3.54,1.56 1.79,0.23 3.65,-0.36 4.97,-1.58 -1.66,-15.55 -0.14,-31.42 4.44,-46.37 0.29,-0.94 0.59,-1.89 0.67,-2.87 0.07,-0.99 -0.12,-2.03 -0.72,-2.81 -0.31,-0.42 -0.74,-0.75 -1.23,-0.96 -0.48,-0.2 -1.02,-0.28 -1.54,-0.21 -0.52,0.06 -1.03,0.26 -1.45,0.57 -0.42,0.32 -0.76,0.74 -0.97,1.22 z" />
                                                </g>
                                                <g id="wing_right">
                                                    <path id="wing_right_base" fill="#020204"
                                                        d="m 162.76,127.12 c 5.24,4.22 8.57,10.59 9.6,17.24 0.8,5.18 0.28,10.51 -0.89,15.62 -1.17,5.12 -2.97,10.06 -4.77,15 -0.71,1.96 -1.43,3.95 -1.71,6.02 -0.29,2.08 -0.11,4.27 0.89,6.11 1.15,2.11 3.29,3.56 5.59,4.24 2.27,0.68 4.72,0.66 7.02,0.09 2.3,-0.57 6.17,-1.31 8.04,-2.77 4.75,-3.69 5.88,-10.1 7.01,-15.72 1.17,-5.87 0.6,-12.02 -0.43,-17.95 -1.41,-8.09 -3.78,-15.99 -6.79,-23.62 -2.22,-5.62 -5.06,-10.98 -8.44,-15.96 -3.32,-4.89 -8.02,-8.7 -11.5,-13.48 -1.21,-1.66 -2.66,-3.38 -3.84,-5.06 -2.56,-3.62 -1.98,-2.94 -3.57,-5.29 -1.15,-1.7 -2.97,-2.28 -4.88,-3.02 -1.92,-0.74 -4.06,-0.96 -6.04,-0.41 -2.6,0.73 -4.73,2.79 -5.86,5.24 -1.13,2.46 -1.33,5.28 -0.89,7.95 0.57,3.44 2.14,6.64 3.92,9.64 2,3.39 4.32,6.66 7.35,9.18 3.16,2.63 6.98,4.37 10.19,6.95 z" />
                                                    <path id="wing_right_glare" fill="#838384"
                                                        filter="url(#blur_wing_right_glare)"
                                                        clip-path="url(#clip_wing_right)"
                                                        d="m 150.42,118.99 c 0.42,0.4 0.86,0.81 1.31,1.19 3.22,2.63 4.93,5.58 8.2,8.16 5.34,4.22 10.75,11.5 11.8,18.15 0.82,5.19 -0.26,8.01 -1.58,14.12 -1.32,6.12 -5.06,14.78 -7.09,20.68 -0.8,2.35 1.64,1.38 1.32,3.86 -0.16,1.22 -0.18,2.45 -0.03,3.67 0.02,-0.23 0.03,-0.48 0.06,-0.71 0.39,-3.38 1.42,-6.63 2.55,-9.82 2.17,-6.13 4.66,-12.15 6.38,-18.45 1.72,-6.29 1.53,-10.82 0.63,-16.23 -1.13,-6.81 -5.09,-13.09 -10.69,-17.24 -3.97,-2.93 -8.64,-4.81 -12.86,-7.38 z" />
                                                </g>
                                            </g>
                                            <g id="feet">
                                                <g id="foot_left">
                                                    <path id="foot_left_base" fill="url(#fill_foot_left_base)"
                                                        d="m 34.98,175.33 c 1.38,-0.57 2.93,-0.68 4.39,-0.41 1.47,0.27 2.86,0.91 4.09,1.74 2.47,1.68 4.3,4.12 6.05,6.54 4.03,5.54 7.9,11.2 11.42,17.08 2.85,4.78 5.46,9.71 8.76,14.18 2.15,2.93 4.57,5.64 6.73,8.55 2.16,2.92 4.07,6.08 5.03,9.58 1.25,4.55 0.76,9.56 -1.4,13.75 -1.52,2.95 -3.86,5.48 -6.7,7.19 -2.84,1.71 -5.83,2.47 -9.15,2.47 -5.27,0 -10.42,-2.83 -15.32,-4.78 -9.98,-3.98 -20.82,-5.22 -31.11,-8.32 -3.16,-0.95 -6.27,-2.08 -9.45,-2.95 -1.42,-0.39 -2.85,-0.73 -4.19,-1.34 -1.34,-0.6 -2.59,-1.51 -3.33,-2.77 -0.57,-0.98 -0.8,-2.13 -0.8,-3.26 0,-1.14 0.28,-2.26 0.67,-3.32 0.77,-2.13 2.02,-4.06 2.86,-6.17 1.37,-3.44 1.62,-7.23 1.43,-10.93 -0.18,-3.69 -0.78,-7.36 -1.03,-11.05 -0.12,-1.65 -0.16,-3.32 0.16,-4.95 0.31,-1.62 1.01,-3.21 2.2,-4.35 1.1,-1.06 2.55,-1.69 4.05,-2 1.49,-0.31 3.03,-0.32 4.55,-0.29 1.52,0.03 3.05,0.12 4.57,-0.01 1.52,-0.12 3.05,-0.46 4.37,-1.22 1.26,-0.72 2.29,-1.79 3.14,-2.96 0.85,-1.17 1.54,-2.45 2.25,-3.72 0.7,-1.26 1.43,-2.52 2.36,-3.64 0.92,-1.12 2.06,-2.09 3.4,-2.64 z" />
                                                    <path id="foot_left_layer_1" fill="#d99a03"
                                                        filter="url(#blur_foot_left_layer_1)"
                                                        clip-path="url(#clip_foot_left)"
                                                        d="m 37.16,177.7 c 1.25,-0.5 2.67,-0.56 3.98,-0.26 1.32,0.3 2.55,0.94 3.61,1.77 2.14,1.65 3.62,3.97 5.05,6.26 3.42,5.54 6.76,11.15 9.92,16.86 2.4,4.31 4.68,8.7 7.62,12.65 1.95,2.62 4.18,5.03 6.17,7.62 1.99,2.59 3.76,5.41 4.64,8.56 1.14,4.05 0.68,8.54 -1.28,12.26 -1.42,2.68 -3.58,4.96 -6.2,6.48 -2.61,1.52 -5.67,2.28 -8.69,2.14 -4.82,-0.22 -9.23,-2.63 -13.77,-4.26 -8.71,-3.16 -18.14,-3.59 -27.08,-6.05 -3.2,-0.87 -6.32,-2.03 -9.53,-2.84 -1.43,-0.36 -2.88,-0.66 -4.23,-1.23 -1.35,-0.57 -2.62,-1.45 -3.36,-2.72 -0.54,-0.95 -0.76,-2.06 -0.73,-3.15 0.04,-1.09 0.31,-2.17 0.7,-3.19 0.78,-2.04 2,-3.88 2.78,-5.92 1.19,-3.08 1.34,-6.47 1.12,-9.76 -0.22,-3.29 -0.8,-6.56 -1,-9.85 -0.08,-1.48 -0.1,-2.97 0.2,-4.41 0.3,-1.45 0.93,-2.85 1.98,-3.89 1.14,-1.13 2.7,-1.74 4.29,-1.99 1.58,-0.24 3.19,-0.13 4.78,0.01 1.6,0.14 3.2,0.32 4.8,0.23 1.6,-0.1 3.22,-0.49 4.54,-1.39 1.2,-0.81 2.1,-2 2.79,-3.27 0.69,-1.27 1.18,-2.64 1.71,-3.98 0.52,-1.35 1.09,-2.69 1.91,-3.89 0.82,-1.19 1.93,-2.24 3.28,-2.79 z" />
                                                    <path id="foot_left_layer_2" fill="#f5bd0c"
                                                        filter="url(#blur_foot_left_layer_2)"
                                                        clip-path="url(#clip_foot_left)"
                                                        d="m 35.99,174.57 c 1.22,-0.6 2.65,-0.72 3.98,-0.45 1.33,0.27 2.57,0.92 3.62,1.77 2.09,1.7 3.43,4.13 4.67,6.51 2.84,5.46 5.5,11.04 8.9,16.19 2.48,3.73 5.33,7.2 7.83,10.92 3.39,5.03 6.15,10.57 7.29,16.5 0.76,4 0.74,8.31 -1.18,11.9 -1.27,2.37 -3.32,4.31 -5.75,5.52 -2.42,1.22 -5.21,1.71 -7.92,1.47 -4.27,-0.37 -8.14,-2.47 -12.16,-3.94 -7.13,-2.59 -14.84,-3.22 -22.18,-5.18 -3.09,-0.82 -6.13,-1.89 -9.26,-2.54 -1.39,-0.29 -2.8,-0.5 -4.12,-1 -1.32,-0.5 -2.57,-1.33 -3.25,-2.55 -0.47,-0.86 -0.63,-1.86 -0.56,-2.84 0.07,-0.97 0.36,-1.92 0.74,-2.83 0.77,-1.8 1.9,-3.46 2.49,-5.32 0.88,-2.75 0.52,-5.72 -0.14,-8.53 -0.65,-2.8 -1.6,-5.55 -1.89,-8.41 -0.13,-1.27 -0.13,-2.57 0.17,-3.82 0.29,-1.25 0.88,-2.45 1.81,-3.34 1.2,-1.15 2.88,-1.73 4.56,-1.89 1.67,-0.16 3.35,0.06 5.01,0.3 1.66,0.24 3.34,0.5 5.01,0.42 1.68,-0.07 3.39,-0.51 4.7,-1.54 1.3,-1.02 2.12,-2.53 2.59,-4.09 0.47,-1.57 0.62,-3.2 0.81,-4.82 0.19,-1.62 0.43,-3.26 1.06,-4.77 0.63,-1.51 1.69,-2.9 3.17,-3.64 z" />
                                                    <path id="foot_left_glare" fill="url(#fill_foot_left_glare)"
                                                        filter="url(#blur_foot_left_glare)"
                                                        clip-path="url(#clip_foot_left)"
                                                        d="m 51.2,188.21 c 2.25,4.06 3.62,8.72 5.85,12.82 2.05,3.77 4.38,7.65 6.46,11.12 0.93,1.55 3.09,3.93 5.27,7.62 1.98,3.34 3.98,8.01 5.1,9.58 -0.64,-1.84 -1.96,-6.77 -3.54,-10.28 -1.47,-3.28 -3.19,-5.15 -4.24,-6.92 -2.08,-3.47 -4.33,-6.6 -6.47,-9.91 -2.95,-4.57 -5.2,-9.68 -8.43,-14.03 z" />
                                                </g>
                                                <g id="foot_right">
                                                    <path id="foot_right_shadow" opacity="0.2"
                                                        fill="url(#fill_foot_right_shadow)"
                                                        filter="url(#blur_foot_right_shadow)"
                                                        clip-path="url(#clip_body)"
                                                        d="m 198.7,215.61 c -0.4,1.33 -1.02,2.62 -1.81,3.8 -1.75,2.59 -4.3,4.55 -6.84,6.35 -4.33,3.07 -8.85,5.89 -12.89,9.38 -2.7,2.34 -5.17,4.97 -7.45,7.73 -1.95,2.36 -3.79,4.84 -6.02,6.94 -2.25,2.12 -4.89,3.84 -7.74,4.77 -3.47,1.13 -7.13,1.08 -10.47,0.22 -2.34,-0.6 -4.63,-1.64 -6.08,-3.53 -1.45,-1.89 -1.92,-4.44 -2.09,-6.94 -0.3,-4.42 0.23,-8.93 0.71,-13.42 0.4,-3.73 0.77,-7.46 0.92,-11.18 0.27,-6.77 -0.18,-13.47 -1.09,-20.05 -0.16,-1.11 -0.32,-2.22 -0.23,-3.35 0.09,-1.14 0.47,-2.32 1.27,-3.2 0.74,-0.81 1.77,-1.29 2.79,-1.52 1.02,-0.24 2.06,-0.25 3.09,-0.28 2.43,-0.06 4.86,-0.21 7.25,0.01 1.51,0.13 2.99,0.41 4.49,0.55 2.51,0.24 5.12,0.12 7.64,-0.62 2.71,-0.8 5.29,-2.29 8.05,-2.7 1.13,-0.17 2.26,-0.15 3.36,0.01 1.12,0.15 2.24,0.46 3.1,1.15 0.66,0.52 1.14,1.23 1.51,1.99 0.56,1.14 0.9,2.39 1.1,3.68 0.17,1.14 0.24,2.31 0.53,3.41 0.48,1.81 1.58,3.35 2.89,4.6 1.32,1.25 2.85,2.24 4.39,3.22 1.53,0.97 3.07,1.93 4.7,2.73 0.77,0.38 1.56,0.72 2.29,1.15 0.74,0.44 1.42,0.97 1.91,1.67 0.66,0.95 0.92,2.2 0.72,3.43 z" />
                                                    <path id="foot_right_base" fill="url(#fill_foot_right_base)"
                                                        d="m 213.47,222.92 c -2.26,2.68 -5.4,4.45 -8.53,6.05 -5.33,2.71 -10.86,5.1 -15.87,8.37 -3.36,2.19 -6.46,4.76 -9.36,7.53 -2.48,2.37 -4.83,4.9 -7.61,6.91 -2.81,2.03 -6.05,3.5 -9.48,4.01 -0.95,0.14 -1.9,0.21 -2.86,0.21 -3.24,0 -6.48,-0.78 -9.46,-2.08 -2.7,-1.17 -5.3,-2.86 -6.86,-5.36 -1.56,-2.52 -1.92,-5.59 -1.92,-8.56 -0.01,-5.23 0.96,-10.41 1.87,-15.57 0.76,-4.29 1.48,-8.58 1.95,-12.91 0.85,-7.86 0.84,-15.81 0.28,-23.71 -0.1,-1.32 -0.21,-2.65 -0.01,-3.96 0.2,-1.31 0.74,-2.62 1.74,-3.48 0.93,-0.8 2.17,-1.16 3.4,-1.22 1.22,-0.07 2.44,0.12 3.65,0.3 2.85,0.42 5.73,0.74 8.52,1.48 1.76,0.46 3.48,1.08 5.23,1.56 2.94,0.79 6.01,1.17 9.02,0.82 3.25,-0.38 6.41,-1.6 9.68,-1.52 1.34,0.03 2.67,0.28 3.95,0.69 1.3,0.41 2.59,1 3.55,1.98 0.73,0.74 1.24,1.67 1.62,2.64 0.57,1.44 0.88,2.98 1.01,4.52 0.11,1.37 0.09,2.76 0.35,4.11 0.43,2.21 1.6,4.24 3.04,5.97 1.45,1.74 3.18,3.21 4.91,4.66 1.73,1.45 3.46,2.89 5.32,4.16 0.87,0.6 1.77,1.16 2.6,1.81 0.83,0.66 1.59,1.42 2.11,2.34 0.45,0.81 0.69,1.72 0.69,2.65 0,0.52 -0.07,1.04 -0.23,1.56 -0.45,1.43 -1.28,2.82 -2.3,4.04 z" />
                                                    <path id="foot_right_layer_1" fill="#cd8907"
                                                        filter="url(#blur_foot_right_layer_1)"
                                                        clip-path="url(#clip_foot_right)"
                                                        d="m 213.21,216.12 c -0.53,1.33 -1.28,2.58 -2.22,3.67 -2.07,2.42 -4.93,4.01 -7.78,5.44 -4.88,2.44 -9.92,4.58 -14.5,7.52 -3.06,1.97 -5.9,4.28 -8.55,6.78 -2.26,2.13 -4.41,4.41 -6.95,6.21 -2.57,1.83 -5.53,3.14 -8.65,3.6 -3.8,0.56 -7.72,-0.16 -11.25,-1.67 -2.46,-1.06 -4.84,-2.56 -6.27,-4.83 -1.42,-2.26 -1.75,-5.02 -1.75,-7.69 -0.02,-4.71 0.87,-9.37 1.71,-14 0.7,-3.85 1.36,-7.71 1.78,-11.6 0.76,-7.08 0.73,-14.22 0.25,-21.32 -0.08,-1.19 -0.17,-2.39 0.01,-3.57 0.18,-1.18 0.67,-2.35 1.57,-3.13 0.85,-0.73 1.99,-1.05 3.11,-1.1 1.11,-0.06 2.22,0.12 3.33,0.28 2.61,0.38 5.23,0.67 7.78,1.33 1.61,0.42 3.18,0.98 4.78,1.4 2.68,0.72 5.49,1.06 8.24,0.74 2.97,-0.34 5.85,-1.44 8.83,-1.37 1.23,0.03 2.44,0.26 3.61,0.62 1.19,0.37 2.37,0.9 3.25,1.78 0.66,0.67 1.11,1.51 1.48,2.38 0.53,1.29 0.89,2.67 0.91,4.07 0.03,1.46 -0.28,2.92 -0.09,4.37 0.16,1.17 0.66,2.28 1.3,3.28 0.63,1 1.4,1.91 2.17,2.81 1.48,1.75 2.96,3.53 4.82,4.87 2.11,1.53 4.62,2.43 6.8,3.85 0.65,0.43 1.28,0.91 1.74,1.54 0.78,1.06 0.98,2.5 0.54,3.74 z" />
                                                    <path id="foot_right_layer_2" fill="#f5c021"
                                                        filter="url(#blur_foot_right_layer_2)"
                                                        clip-path="url(#clip_foot_right)"
                                                        d="m 212.91,214.61 c -0.6,1.35 -1.37,2.6 -2.28,3.71 -2.12,2.58 -4.99,4.35 -8,5.49 -4.97,1.88 -10.39,2.13 -15.26,4.27 -2.97,1.3 -5.65,3.26 -8.36,5.12 -2.18,1.49 -4.42,2.94 -6.82,3.98 -2.72,1.19 -5.6,1.85 -8.5,2.32 -1.84,0.29 -3.71,0.51 -5.57,0.41 -1.86,-0.1 -3.72,-0.54 -5.37,-1.49 -1.24,-0.72 -2.36,-1.75 -3.03,-3.1 -0.73,-1.49 -0.86,-3.24 -0.85,-4.94 0.05,-4.5 1.02,-8.96 0.99,-13.47 -0.03,-3.93 -0.81,-7.8 -1.03,-11.72 -0.43,-7.54 1.19,-15.2 -0.24,-22.59 -0.22,-1.19 -0.53,-2.37 -0.52,-3.58 0.01,-0.6 0.1,-1.21 0.31,-1.77 0.22,-0.55 0.56,-1.06 1.01,-1.42 0.39,-0.29 0.84,-0.47 1.31,-0.56 0.46,-0.08 0.94,-0.06 1.41,0.01 0.93,0.15 1.82,0.51 2.73,0.78 2.6,0.78 5.35,0.76 8,1.35 1.66,0.36 3.26,0.97 4.91,1.41 2.75,0.76 5.63,1.08 8.46,0.75 3.04,-0.36 6.01,-1.46 9.07,-1.38 1.26,0.03 2.5,0.26 3.71,0.62 1.21,0.36 2.42,0.87 3.34,1.8 0.65,0.67 1.13,1.52 1.51,2.4 0.57,1.29 0.96,2.69 0.95,4.11 -0.01,0.74 -0.12,1.47 -0.19,2.21 -0.06,0.74 -0.08,1.49 0.09,2.2 0.18,0.72 0.55,1.37 0.97,1.96 0.42,0.59 0.9,1.12 1.34,1.7 1.22,1.61 2.1,3.49 3.05,5.3 0.95,1.81 2.02,3.6 3.53,4.91 2.05,1.77 4.7,2.48 6.99,3.89 0.67,0.41 1.31,0.89 1.78,1.55 0.38,0.52 0.63,1.15 0.73,1.81 0.09,0.65 0.03,1.34 -0.17,1.96 z" />
                                                    <path id="foot_right_glare" fill="url(#fill_foot_right_glare)"
                                                        filter="url(#blur_foot_right_glare)"
                                                        clip-path="url(#clip_foot_right)"
                                                        d="m 148.08,181.58 c 2.82,-0.76 5.22,1.38 7.27,2.99 1.32,1.13 3.24,0.85 4.86,0.9 2.69,-0.09 5.36,0.45 8.05,0.12 5.3,-0.45 10.49,-1.75 15.81,-1.97 2.54,-0.16 5.4,-0.31 7.59,1.17 0.89,0.62 2.2,3.23 3.07,2.25 -0.36,-2.74 -2.39,-5.39 -5.11,-6.12 -2.14,-0.34 -4.3,0.25 -6.46,0.06 -6.39,-0.15 -12.75,-1.34 -19.16,-1 -4.46,0.04 -8.91,-0.17 -13.37,-0.34 -1.75,-0.36 -2.37,1.19 -3.32,1.79 0.25,0.19 0.34,0.25 0.77,0.15 z" />
                                                </g>
                                            </g>
                                            <g id="wing_tip_right">
                                                <g id="wing_tip_right_shadow">
                                                    <path id="wing_tip_right_shadow_lower" opacity="0.35"
                                                        fill="url(#fill_wing_tip_right_shadow_lower)"
                                                        filter="url(#blur_wing_tip_right_shadow_lower)"
                                                        clip-path="url(#clip_foot_right)"
                                                        d="m 185.49,187.61 c -0.48,-0.95 -1.36,-1.66 -2.35,-2.07 -0.98,-0.41 -2.06,-0.55 -3.13,-0.54 -2.13,0.02 -4.25,0.57 -6.38,0.39 -1.79,-0.16 -3.49,-0.83 -5.24,-1.26 -1.81,-0.44 -3.73,-0.61 -5.52,-0.12 -1.92,0.52 -3.61,1.81 -4.67,3.49 -0.94,1.48 -1.38,3.23 -1.52,4.98 -0.14,1.75 0.01,3.5 0.19,5.25 0.12,1.26 0.27,2.52 0.57,3.75 0.31,1.23 0.78,2.43 1.52,3.46 1.07,1.48 2.66,2.54 4.37,3.17 2.8,1.03 5.98,0.98 8.73,-0.15 4.88,-2.12 9.01,-5.92 11.52,-10.6 0.91,-1.68 1.61,-3.47 2.06,-5.31 0.18,-0.74 0.32,-1.49 0.32,-2.25 0.01,-0.75 -0.12,-1.52 -0.47,-2.19 z" />
                                                    <path id="wing_tip_right_shadow_upper" opacity="0.35"
                                                        fill="url(#fill_wing_tip_right_shadow_upper)"
                                                        filter="url(#blur_wing_tip_right_shadow_upper)"
                                                        clip-path="url(#clip_foot_right)"
                                                        d="m 185.49,184.89 c -0.48,-0.69 -1.36,-1.2 -2.35,-1.5 -0.98,-0.3 -2.06,-0.39 -3.13,-0.39 -2.13,0.02 -4.25,0.42 -6.38,0.28 -1.79,-0.11 -3.49,-0.6 -5.24,-0.9 -1.81,-0.32 -3.73,-0.45 -5.52,-0.09 -1.92,0.37 -3.61,1.3 -4.67,2.52 -0.94,1.07 -1.38,2.34 -1.52,3.6 -0.14,1.26 0.01,2.53 0.19,3.79 0.12,0.91 0.27,1.83 0.57,2.72 0.31,0.89 0.78,1.76 1.52,2.5 1.07,1.07 2.66,1.83 4.37,2.29 2.8,0.75 5.98,0.71 8.73,-0.11 4.88,-1.53 9.01,-4.28 11.52,-7.66 0.91,-1.22 1.61,-2.51 2.06,-3.84 0.18,-0.54 0.32,-1.08 0.32,-1.62 0.01,-0.55 -0.12,-1.11 -0.47,-1.59 z" />
                                                </g>
                                                <path id="wing_tip_right_base" fill="#020204"
                                                    d="m 189.55,178.72 c -0.35,-0.95 -0.97,-1.79 -1.72,-2.47 -0.75,-0.68 -1.64,-1.2 -2.57,-1.6 -1.86,-0.79 -3.89,-1.09 -5.89,-1.46 -1.87,-0.35 -3.74,-0.78 -5.62,-1.1 -1.96,-0.33 -3.98,-0.55 -5.92,-0.11 -1.69,0.38 -3.26,1.26 -4.54,2.43 -1.28,1.17 -2.28,2.63 -3,4.21 -1.27,2.79 -1.67,5.92 -1.43,8.97 0.18,2.27 0.76,4.61 2.25,6.32 1.21,1.39 2.92,2.26 4.68,2.78 3.04,0.9 6.35,0.85 9.36,-0.13 4.97,-1.67 9.37,-4.98 12.35,-9.29 0.98,-1.43 1.82,-2.98 2.2,-4.66 0.29,-1.28 0.3,-2.66 -0.15,-3.89 z" />
                                                <g id="wing_tip_right_glare">
                                                    <defs>
                                                        <path id="path_wing_tip_right_glare"
                                                            d="m 168.89,171.07 c -0.47,0.03 -0.93,0.08 -1.4,0.17 -2.99,0.53 -5.73,2.42 -7.27,5.03 -1.09,1.85 -1.58,4.03 -1.43,6.17 0.07,-1.5 0.46,-2.97 1.19,-4.28 1.23,-2.23 3.47,-3.91 5.98,-4.37 1.54,-0.28 3.13,-0.11 4.68,0.08 1.5,0.19 3,0.39 4.47,0.7 2.28,0.5 4.53,1.26 6.44,2.59 0.44,0.31 0.86,0.66 1.21,1.08 0.35,0.41 0.62,0.89 0.73,1.42 0.15,0.78 -0.07,1.6 -0.46,2.29 -0.39,0.7 -0.92,1.3 -1.48,1.86 -0.46,0.46 -0.94,0.89 -1.43,1.32 2.21,-0.43 4.44,-1.03 6.28,-2.31 0.77,-0.55 1.48,-1.2 1.94,-2.02 0.46,-0.83 0.65,-1.83 0.43,-2.75 -0.16,-0.62 -0.5,-1.19 -0.92,-1.67 -0.42,-0.48 -0.93,-0.87 -1.45,-1.24 -2.31,-1.62 -5.01,-2.65 -7.81,-2.99 -1.8,-0.33 -3.61,-0.61 -5.42,-0.83 -1.41,-0.18 -2.86,-0.33 -4.28,-0.25 z" />
                                                    </defs>
                                                    <use id="wing_tip_right_glare_1" href="#path_wing_tip_right_glare"
                                                        xlink:href="#path_wing_tip_right_glare"
                                                        fill="url(#fill_wing_tip_right_glare_1)"
                                                        filter="url(#blur_wing_tip_right_glare)"
                                                        clip-path="url(#clip_wing_tip_right)" />
                                                    <use id="wing_tip_right_glare_2" href="#path_wing_tip_right_glare"
                                                        xlink:href="#path_wing_tip_right_glare"
                                                        fill="url(#fill_wing_tip_right_glare_2)"
                                                        filter="url(#blur_wing_tip_right_glare)"
                                                        clip-path="url(#clip_wing_tip_right)" />
                                                </g>
                                            </g>
                                            <g id="face">
                                                <g id="eyes">
                                                    <g id="eye_left">
                                                        <path id="eyeball_left" fill="url(#fill_eyeball_left)"
                                                            d="m 84.45,38.28 c -1.53,0.08 -3,0.79 -4.12,1.84 -1.13,1.05 -1.92,2.43 -2.41,3.88 -0.97,2.92 -0.75,6.08 -0.53,9.15 0.2,2.77 0.41,5.6 1.45,8.18 0.52,1.3 1.25,2.51 2.22,3.51 0.97,0.99 2.2,1.76 3.55,2.09 1.26,0.32 2.62,0.26 3.86,-0.13 1.25,-0.4 2.38,-1.11 3.32,-2.02 1.36,-1.33 2.27,-3.07 2.8,-4.9 0.53,-1.83 0.68,-3.75 0.65,-5.66 -0.04,-2.38 -0.35,-4.77 -1.09,-7.03 -0.75,-2.26 -1.94,-4.4 -3.6,-6.11 -0.8,-0.83 -1.72,-1.55 -2.75,-2.06 -1.04,-0.51 -2.2,-0.8 -3.35,-0.74 z" />
                                                        <g id="pupil_left">
                                                            <path id="pupil_left_base" fill="#020204"
                                                                d="m 80.75,50.99 c -0.32,1.94 -0.33,3.97 0.33,5.81 0.44,1.22 1.17,2.33 2.05,3.28 0.57,0.62 1.23,1.18 1.99,1.55 0.77,0.37 1.65,0.52 2.48,0.32 0.76,-0.19 1.42,-0.68 1.91,-1.29 0.49,-0.61 0.82,-1.34 1.05,-2.09 0.69,-2.21 0.58,-4.62 -0.11,-6.83 -0.49,-1.61 -1.32,-3.16 -2.6,-4.24 -0.62,-0.52 -1.34,-0.93 -2.12,-1.11 -0.78,-0.19 -1.63,-0.14 -2.36,0.19 -0.81,0.37 -1.44,1.07 -1.85,1.86 -0.41,0.79 -0.62,1.67 -0.77,2.55 z" />
                                                            <path id="pupil_left_glare"
                                                                fill="url(#fill_pupil_left_glare)"
                                                                filter="url(#blur_pupil_left_glare)"
                                                                clip-path="url(#clip_pupil_left)"
                                                                d="m 84.84,49.59 c 0.21,0.55 0.91,0.75 1.3,1.19 0.37,0.42 0.76,0.87 0.97,1.4 0.39,1.01 -0.39,2.51 0.43,3.23 0.25,0.22 0.77,0.23 1.02,0 0.99,-0.9 0.77,-2.71 0.38,-3.99 -0.36,-1.15 -1.23,-2.25 -2.31,-2.8 -0.5,-0.26 -1.25,-0.47 -1.68,-0.11 -0.27,0.24 -0.24,0.74 -0.11,1.08 z" />
                                                        </g>
                                                        <path id="eyelid_left" fill="url(#fill_eyelid_left)"
                                                            clip-path="url(#clip_eye_left)"
                                                            d="m 81.14,44.46 c 2.32,-1.38 5.13,-1.7 7.82,-1.45 2.68,0.26 5.27,1.04 7.87,1.75 1.91,0.52 3.84,1 5.63,1.84 1.78,0.84 3.44,2.08 4.43,3.8 0.16,0.27 0.29,0.56 0.46,0.83 0.17,0.27 0.37,0.52 0.62,0.71 0.25,0.19 0.57,0.32 0.88,0.3 0.16,-0.01 0.32,-0.05 0.45,-0.13 0.14,-0.08 0.26,-0.2 0.33,-0.34 0.08,-0.16 0.11,-0.35 0.1,-0.53 -0.01,-0.18 -0.05,-0.36 -0.1,-0.54 -0.65,-2.37 -2.19,-4.38 -3.35,-6.55 -0.7,-1.3 -1.28,-2.66 -1.98,-3.96 -2.43,-4.45 -6.42,-7.94 -10.95,-10.21 -4.53,-2.27 -9.59,-3.36 -14.65,-3.65 -5.86,-0.35 -11.73,0.35 -17.51,1.37 -2.51,0.44 -5.06,0.96 -7.27,2.21 -1.11,0.62 -2.13,1.42 -2.92,2.42 -0.8,0.99 -1.36,2.18 -1.55,3.44 -0.17,1.22 0.01,2.47 0.44,3.62 0.42,1.15 1.08,2.2 1.86,3.15 1.54,1.91 3.53,3.39 5.36,5.03 1.83,1.63 3.52,3.44 5.57,4.79 1.02,0.68 2.13,1.24 3.31,1.57 1.18,0.33 2.44,0.42 3.64,0.17 1.24,-0.25 2.4,-0.86 3.41,-1.64 1.01,-0.77 1.88,-1.7 2.71,-2.66 1.66,-1.93 3.21,-4.04 5.39,-5.34 z" />
                                                        <path id="eyebrow_left" fill="url(#fill_eyebrow_left)"
                                                            filter="url(#blur_eyebrow_left)"
                                                            d="m 90.77,36.57 c 2.16,2.02 3.76,4.52 4.85,7.16 -0.48,-2.91 -1.23,-5.26 -3.13,-7.16 -1.16,-1.09 -2.49,-2.05 -3.98,-2.72 -1.32,-0.59 -2.77,-0.96 -3.61,-0.97 -0.83,-0.02 -1.03,0 -1.2,0.01 -0.18,0.01 -0.31,0.01 0.23,0.08 0.54,0.06 1.75,0.39 3.05,0.97 1.3,0.58 2.62,1.54 3.79,2.63 z" />
                                                    </g>
                                                    <g id="eye_right">
                                                        <path id="eyeball_right" fill="url(#fill_eyeball_right)"
                                                            d="m 111.61,38.28 c -2.39,1.65 -4.4,3.94 -5.38,6.68 -1.24,3.45 -0.77,7.31 0.43,10.77 1.22,3.55 3.27,6.93 6.36,9.06 1.54,1.07 3.33,1.8 5.19,2.02 1.87,0.22 3.8,-0.09 5.47,-0.95 2.02,-1.06 3.57,-2.91 4.53,-4.98 0.96,-2.08 1.37,-4.37 1.5,-6.66 0.16,-2.9 -0.12,-5.86 -1.08,-8.61 -1.04,-2.99 -2.92,-5.75 -5.58,-7.47 -1.32,-0.86 -2.83,-1.45 -4.4,-1.67 -1.57,-0.22 -3.19,-0.05 -4.67,0.52 -0.84,0.33 -1.62,0.78 -2.37,1.29 z" />
                                                        <g id="pupil_right">
                                                            <path id="pupil_right_base" fill="#020204"
                                                                d="m 117.14,45.52 c -0.9,0.06 -1.78,0.37 -2.55,0.85 -0.76,0.48 -1.41,1.13 -1.92,1.88 -1.03,1.49 -1.48,3.31 -1.55,5.12 -0.05,1.35 0.1,2.72 0.55,4 0.45,1.28 1.2,2.47 2.25,3.33 1.07,0.89 2.42,1.42 3.81,1.49 1.39,0.06 2.79,-0.34 3.93,-1.13 0.91,-0.63 1.64,-1.5 2.16,-2.48 0.52,-0.97 0.84,-2.05 0.98,-3.15 0.25,-1.93 -0.03,-3.95 -0.93,-5.69 -0.89,-1.74 -2.41,-3.17 -4.24,-3.84 -0.8,-0.29 -1.65,-0.44 -2.49,-0.38 z" />
                                                            <path id="pupil_right_glare"
                                                                fill="url(#fill_pupil_right_glare)"
                                                                filter="url(#blur_pupil_right_glare)"
                                                                clip-path="url(#clip_pupil_right)"
                                                                d="m 122.71,53.36 c 1,-1 -0.71,-3.65 -2.05,-4.74 -0.97,-0.78 -3.78,-1.61 -3.66,-0.75 0.12,0.85 1.39,1.95 2.23,2.79 1.05,1.03 3,3.18 3.48,2.7 z" />
                                                        </g>
                                                        <path id="eyelid_right" fill="url(#fill_eyelid_right)"
                                                            clip-path="url(#clip_eye_right)"
                                                            d="m 102.56,47.01 c 2.06,-1.71 4.45,-3.01 7,-3.8 5.25,-1.62 11.2,-0.98 15.84,1.97 1.6,1.01 3.03,2.27 4.52,3.45 1.48,1.17 3.06,2.27 4.85,2.9 0.97,0.34 2,0.54 3.02,0.43 0.92,-0.09 1.81,-0.44 2.57,-0.96 0.76,-0.53 1.4,-1.23 1.88,-2.02 0.96,-1.58 1.27,-3.5 1.1,-5.34 -0.33,-3.69 -2.41,-6.94 -4.15,-10.21 -0.55,-1.02 -1.07,-2.06 -1.73,-3.01 -2.01,-2.93 -5.23,-4.86 -8.6,-5.99 -3.37,-1.13 -6.93,-1.54 -10.46,-1.98 -1.58,-0.2 -3.17,-0.41 -4.74,-0.22 -1.81,0.22 -3.51,0.95 -5.28,1.4 -0.84,0.22 -1.69,0.37 -2.52,0.61 -0.83,0.24 -1.65,0.57 -2.33,1.11 -0.98,0.79 -1.6,1.98 -1.87,3.21 -0.27,1.24 -0.21,2.52 -0.01,3.77 0.39,2.5 1.33,4.93 1.24,7.46 -0.06,1.73 -0.61,3.44 -0.54,5.17 0.02,0.51 0.12,1.55 0.21,2.05 z" />
                                                        <path id="eyebrow_right" fill="url(#fill_eyebrow_right)"
                                                            filter="url(#blur_eyebrow_right)"
                                                            d="m 119.93,31.18 c -0.41,0.52 -0.78,1.08 -1.07,1.7 1.85,0.4 3.61,1.16 5.19,2.21 3.06,2.03 5.38,4.99 7.01,8.29 0.38,-0.42 0.72,-0.87 1.02,-1.37 -1.64,-3.44 -4,-6.55 -7.16,-8.65 -1.52,-1 -3.21,-1.77 -4.99,-2.18 z" />
                                                    </g>
                                                </g>
                                                <g id="beak">
                                                    <g id="beak_shadow">
                                                        <path id="beak_shadow_lower" fill="#000000"
                                                            fill-opacity="0.258824"
                                                            filter="url(#blur_beak_shadow_lower)"
                                                            clip-path="url(#clip_body)"
                                                            d="m 81.12,89.33 c 1.47,4.26 4.42,7.89 7.92,10.72 1.16,0.95 2.39,1.82 3.76,2.43 1.36,0.62 2.87,0.97 4.36,0.84 1.46,-0.12 2.85,-0.7 4.13,-1.42 1.28,-0.72 2.46,-1.59 3.7,-2.37 2.12,-1.35 4.39,-2.44 6.6,-3.64 2.65,-1.45 5.23,-3.1 7.46,-5.14 1.03,-0.93 1.98,-1.95 3.11,-2.75 1.13,-0.81 2.49,-1.39 3.87,-1.29 1.04,0.07 2.01,0.51 3.03,0.73 0.51,0.11 1.03,0.16 1.55,0.08 0.51,-0.08 1.01,-0.29 1.37,-0.67 0.44,-0.46 0.64,-1.12 0.61,-1.76 -0.02,-0.63 -0.24,-1.25 -0.54,-1.81 -0.59,-1.13 -1.49,-2.1 -1.89,-3.31 -0.36,-1.08 -0.29,-2.24 -0.26,-3.37 0.03,-1.14 0.01,-2.32 -0.51,-3.33 -0.4,-0.76 -1.07,-1.37 -1.83,-1.77 -0.76,-0.41 -1.62,-0.62 -2.48,-0.7 -1.72,-0.16 -3.44,0.18 -5.17,0.27 -2.28,0.13 -4.58,-0.15 -6.87,-0.02 -2.85,0.18 -5.65,1 -8.51,1.01 -3.26,0.01 -6.52,-1.06 -9.74,-0.55 -1.39,0.22 -2.71,0.72 -4.03,1.16 -1.33,0.45 -2.7,0.84 -4.1,0.82 -1.59,-0.03 -3.13,-0.58 -4.72,-0.69 -0.79,-0.06 -1.6,0 -2.35,0.28 -0.74,0.28 -1.41,0.79 -1.78,1.5 -0.21,0.4 -0.31,0.86 -0.33,1.31 -0.02,0.46 0.04,0.91 0.15,1.36 0.22,0.88 0.63,1.71 0.96,2.55 1.2,3.07 1.46,6.42 2.53,9.53 z" />
                                                        <path id="beak_shadow_upper" opacity="0.3" fill="#000000"
                                                            filter="url(#blur_beak_shadow_upper)"
                                                            clip-path="url(#clip_body)"
                                                            d="m 77.03,77.2 c 2.85,1.76 5.41,3.93 7.56,6.39 1.99,2.29 3.68,4.89 6.29,6.58 1.83,1.2 4.04,1.87 6.28,2.08 2.63,0.24 5.29,-0.15 7.83,-0.84 2.35,-0.63 4.62,-1.53 6.7,-2.71 3.97,-2.25 7.28,-5.55 11.65,-7.03 0.95,-0.33 1.94,-0.56 2.86,-0.96 0.92,-0.39 1.79,-0.99 2.23,-1.83 0.42,-0.82 0.4,-1.75 0.54,-2.64 0.15,-0.96 0.48,-1.88 0.66,-2.83 0.18,-0.95 0.2,-1.96 -0.24,-2.83 -0.37,-0.72 -1.04,-1.29 -1.81,-1.66 -0.77,-0.36 -1.64,-0.52 -2.51,-0.56 -1.72,-0.08 -3.43,0.33 -5.16,0.47 -2.28,0.19 -4.58,-0.08 -6.87,-0.01 -2.85,0.08 -5.66,0.67 -8.51,0.8 -3.25,0.14 -6.49,-0.34 -9.74,-0.44 -1.41,-0.05 -2.83,-0.03 -4.21,0.2 -1.39,0.22 -2.75,0.65 -3.92,1.37 -1.14,0.69 -2.07,1.64 -3.11,2.45 -0.52,0.41 -1.08,0.78 -1.68,1.07 -0.61,0.28 -1.28,0.48 -1.96,0.51 -0.35,0.01 -0.71,-0.01 -1.05,0.04 -0.59,0.08 -1.13,0.39 -1.47,0.83 -0.34,0.45 -0.47,1.02 -0.36,1.55 z" />
                                                    </g>
                                                    <path id="beak_base" fill="url(#fill_beak_base)"
                                                        d="m 91.66,58.53 c 1.53,-1.71 2.57,-3.8 4.03,-5.56 0.73,-0.88 1.58,-1.69 2.57,-2.26 0.99,-0.57 2.15,-0.89 3.29,-0.79 1.27,0.11 2.46,0.74 3.39,1.61 0.93,0.87 1.62,1.97 2.17,3.12 0.53,1.11 0.95,2.28 1.71,3.24 0.81,1.02 1.94,1.71 2.97,2.52 0.51,0.4 1.01,0.83 1.41,1.34 0.41,0.51 0.72,1.1 0.86,1.74 0.13,0.65 0.06,1.33 -0.16,1.95 -0.23,0.62 -0.61,1.18 -1.09,1.64 -0.95,0.92 -2.25,1.42 -3.56,1.6 -2.62,0.37 -5.27,-0.41 -7.92,-0.34 -2.67,0.08 -5.29,1.02 -7.97,0.93 -1.33,-0.05 -2.69,-0.38 -3.79,-1.14 -0.55,-0.39 -1.03,-0.88 -1.38,-1.45 -0.34,-0.57 -0.55,-1.23 -0.58,-1.9 -0.02,-0.64 0.13,-1.28 0.39,-1.86 0.25,-0.59 0.61,-1.12 1.01,-1.62 0.81,-0.99 1.8,-1.81 2.65,-2.77 z" />
                                                    <g id="mandible_lower">
                                                        <path id="mandible_lower_base"
                                                            fill="url(#fill_mandible_lower_base)"
                                                            d="m 77.14,75.05 c 0.06,0.26 0.15,0.5 0.28,0.73 0.23,0.38 0.57,0.69 0.93,0.95 0.36,0.27 0.75,0.49 1.13,0.72 2.01,1.27 3.65,3.04 5.11,4.92 1.95,2.52 3.68,5.31 6.29,7.14 1.84,1.3 4.04,2.03 6.28,2.26 2.63,0.26 5.29,-0.16 7.83,-0.91 2.35,-0.69 4.62,-1.66 6.7,-2.95 3.97,-2.44 7.28,-6.02 11.65,-7.63 0.95,-0.35 1.94,-0.6 2.86,-1.03 0.92,-0.44 1.79,-1.08 2.23,-2 0.42,-0.88 0.4,-1.9 0.54,-2.87 0.15,-1.03 0.48,-2.03 0.66,-3.06 0.18,-1.03 0.2,-2.13 -0.24,-3.08 -0.37,-0.78 -1.04,-1.4 -1.81,-1.79 -0.77,-0.4 -1.64,-0.58 -2.51,-0.62 -1.72,-0.08 -3.43,0.36 -5.16,0.52 -2.28,0.21 -4.58,-0.09 -6.87,-0.02 -2.85,0.09 -5.66,0.73 -8.51,0.87 -3.25,0.15 -6.49,-0.35 -9.74,-0.48 -1.41,-0.06 -2.83,-0.04 -4.22,0.2 -1.39,0.23 -2.75,0.71 -3.91,1.51 -1.13,0.78 -2.03,1.84 -3.07,2.74 -0.52,0.45 -1.08,0.86 -1.7,1.16 -0.61,0.3 -1.29,0.49 -1.98,0.47 -0.35,-0.01 -0.72,-0.06 -1.05,0.04 -0.21,0.07 -0.4,0.2 -0.56,0.35 -0.16,0.16 -0.29,0.34 -0.41,0.52 -0.29,0.42 -0.54,0.87 -0.75,1.34 z" />
                                                        <path id="mandible_lower_glare" fill="#d9b30d"
                                                            filter="url(#blur_mandible_lower_glare)"
                                                            clip-path="url(#clip_mandible_lower)"
                                                            d="m 89.9,78.56 c -0.33,1.37 -0.13,2.87 0.56,4.11 0.68,1.24 1.84,2.2 3.19,2.65 1.7,0.57 3.62,0.29 5.21,-0.54 0.93,-0.48 1.77,-1.16 2.3,-2.06 0.27,-0.44 0.46,-0.94 0.53,-1.46 0.06,-0.51 0.02,-1.05 -0.16,-1.54 -0.2,-0.53 -0.56,-1 -0.99,-1.37 -0.44,-0.37 -0.95,-0.64 -1.5,-0.82 -1.08,-0.36 -2.77,-0.66 -3.91,-0.68 -2.02,-0.04 -4.9,0.34 -5.23,1.71 z" />
                                                    </g>
                                                    <g id="mandible_upper">
                                                        <path id="mandible_upper_shadow" fill="#604405"
                                                            filter="url(#blur_mandible_upper_shadow)"
                                                            clip-path="url(#clip_mandible_lower)"
                                                            d="m 84.31,67.86 c -1.16,0.68 -2.27,1.43 -3.36,2.2 -0.57,0.41 -1.15,0.84 -1.45,1.47 -0.21,0.44 -0.26,0.94 -0.27,1.43 0,0.5 0.03,0.99 -0.04,1.48 -0.04,0.33 -0.13,0.66 -0.14,0.99 -0.01,0.17 0,0.34 0.04,0.5 0.05,0.16 0.13,0.32 0.24,0.44 0.15,0.16 0.35,0.26 0.56,0.32 0.21,0.06 0.42,0.09 0.64,0.14 1.01,0.24 1.89,0.86 2.66,1.56 0.77,0.69 1.47,1.48 2.28,2.13 2.18,1.78 5.07,2.52 7.89,2.56 2.82,0.05 5.61,-0.54 8.36,-1.16 2.16,-0.49 4.32,-0.99 6.39,-1.76 3.2,-1.18 6.16,-2.96 8.72,-5.19 1.17,-1.01 2.26,-2.12 3.57,-2.94 1.15,-0.73 2.44,-1.21 3.62,-1.9 0.11,-0.06 0.21,-0.13 0.3,-0.2 0.1,-0.08 0.18,-0.18 0.24,-0.28 0.09,-0.19 0.09,-0.42 0.03,-0.62 -0.06,-0.2 -0.18,-0.38 -0.31,-0.55 -0.15,-0.18 -0.31,-0.34 -0.49,-0.5 -1.23,-1.05 -2.89,-1.43 -4.51,-1.56 -1.61,-0.12 -3.24,-0.03 -4.83,-0.3 -1.5,-0.25 -2.92,-0.81 -4.37,-1.27 -1.52,-0.49 -3.07,-0.87 -4.64,-1.13 -3.71,-0.61 -7.52,-0.49 -11.19,0.27 -3.49,0.73 -6.87,2.05 -9.94,3.87 z" />
                                                        <path id="mandible_upper_base"
                                                            fill="url(#fill_mandible_upper_base)"
                                                            d="m 83.94,63.95 c -1.66,1.12 -3.16,2.49 -4.43,4.04 -0.72,0.89 -1.38,1.86 -1.74,2.94 -0.29,0.86 -0.39,1.76 -0.57,2.65 -0.07,0.33 -0.15,0.66 -0.14,1 0,0.16 0.02,0.33 0.07,0.5 0.05,0.16 0.14,0.31 0.25,0.43 0.2,0.2 0.47,0.31 0.74,0.37 0.28,0.05 0.56,0.06 0.84,0.09 1.25,0.15 2.4,0.75 3.44,1.47 1.04,0.71 2,1.55 3.07,2.22 2.35,1.49 5.16,2.15 7.95,2.26 2.78,0.11 5.56,-0.31 8.3,-0.86 2.17,-0.43 4.33,-0.95 6.39,-1.76 3.16,-1.25 6.01,-3.16 8.72,-5.19 1.24,-0.92 2.46,-1.87 3.57,-2.94 0.37,-0.37 0.74,-0.74 1.14,-1.08 0.4,-0.33 0.85,-0.62 1.35,-0.78 0.76,-0.24 1.58,-0.17 2.37,-0.04 0.59,0.1 1.18,0.23 1.78,0.21 0.3,-0.02 0.6,-0.07 0.88,-0.18 0.28,-0.11 0.54,-0.28 0.73,-0.52 0.25,-0.3 0.38,-0.7 0.38,-1.09 0,-0.4 -0.12,-0.79 -0.32,-1.13 -0.4,-0.68 -1.09,-1.14 -1.81,-1.46 -0.99,-0.44 -2.06,-0.65 -3.11,-0.91 -3.23,-0.78 -6.37,-1.93 -9.34,-3.41 -1.48,-0.73 -2.92,-1.54 -4.37,-2.32 -1.5,-0.8 -3.02,-1.57 -4.64,-2.07 -3.64,-1.1 -7.6,-0.74 -11.19,0.51 -3.98,1.38 -7.58,3.84 -10.31,7.05 z" />
                                                        <path id="mandible_upper_glare" fill="#f6da4a"
                                                            filter="url(#blur_mandible_upper_glare)"
                                                            clip-path="url(#clip_mandible_upper)"
                                                            d="m 109.45,64.75 c -0.2,-0.24 -0.48,-0.42 -0.78,-0.51 -0.3,-0.09 -0.62,-0.09 -0.93,-0.04 -0.62,0.11 -1.18,0.44 -1.7,0.8 -1.47,1.01 -2.77,2.26 -3.91,3.64 -1.5,1.83 -2.74,3.94 -3.16,6.27 -0.07,0.39 -0.11,0.8 -0.07,1.19 0.05,0.4 0.2,0.79 0.49,1.07 0.24,0.25 0.58,0.4 0.92,0.45 0.35,0.05 0.71,0 1.04,-0.11 0.66,-0.22 1.21,-0.69 1.74,-1.15 2.87,-2.58 5.47,-5.66 6.51,-9.38 0.1,-0.37 0.19,-0.75 0.19,-1.14 0,-0.39 -0.1,-0.78 -0.34,-1.09 z" />
                                                        <path id="naris_left" opacity="0.8" fill="url(#fill_naris_left)"
                                                            filter="url(#blur_naris_left)"
                                                            d="m 92.72,59.06 c -0.77,-0.25 -2.03,1.1 -1.62,1.79 0.11,0.19 0.46,0.43 0.7,0.3 0.35,-0.19 0.64,-0.89 1.02,-1.16 0.25,-0.18 0.2,-0.84 -0.1,-0.93 z" />
                                                        <path id="naris_right" opacity="0.8"
                                                            fill="url(#fill_naris_right)"
                                                            filter="url(#blur_naris_right)"
                                                            d="m 102.56,59.42 c 0.2,0.64 1.23,0.53 1.83,0.84 0.52,0.27 0.94,0.86 1.53,0.88 0.56,0.01 1.44,-0.2 1.51,-0.76 0.09,-0.73 -0.98,-1.2 -1.67,-1.47 -0.89,-0.34 -2.03,-0.52 -2.86,-0.06 -0.19,0.11 -0.4,0.36 -0.34,0.57 z" />
                                                    </g>
                                                    <path id="beak_corner" fill="url(#fill_beak_corner)"
                                                        filter="url(#blur_beak_corner)" clip-path="url(#clip_beak)"
                                                        d="m 129.27,69.15 a 2.42,3.1 16.94 0 1 -2.81,3.04 2.42,3.1 16.94 0 1 -2.12,-3.04 2.42,3.1 16.94 0 1 2.81,-3.05 2.42,3.1 16.94 0 1 2.12,3.05 z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Linux</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in linux-gradient-text gradient-text">
                                    Linux is both an open-source Unix-like kernel and a generic name for a family of
                                    open-source Unix-like operating systems based on the Linux kernel, an operating
                                    system kernel first released on September 17, 1991, by Linus Torvalds. Linux is
                                    typically packaged as a Linux distribution (distro), which includes the kernel and
                                    supporting system software and libraries, many of which are provided by the GNU
                                    Project.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in mb-14">
                            <v-card href="https://git-scm.com/" target="_blank" rounded="xl" hover>
                                <div class="pt-7 fade-in d-flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120px" viewBox="0 0 219 92">
                                        <defs>
                                            <clipPath id="a">
                                                <path d="M159 .79h25V69h-25Zm0 0" />
                                            </clipPath>
                                            <clipPath id="b">
                                                <path d="M183 9h35.371v60H183Zm0 0" />
                                            </clipPath>
                                            <clipPath id="c">
                                                <path d="M0 .79h92V92H0Zm0 0" />
                                            </clipPath>
                                        </defs>
                                        <path style="stroke:none;fill-rule:nonzero;fill:#f03c2e;fill-opacity:1"
                                            d="M130.871 31.836c-4.785 0-8.351 2.352-8.351 8.008 0 4.261 2.347 7.222 8.093 7.222 4.871 0 8.18-2.867 8.18-7.398 0-5.133-2.961-7.832-7.922-7.832Zm-9.57 39.95c-1.133 1.39-2.262 2.87-2.262 4.612 0 3.48 4.434 4.524 10.527 4.524 5.051 0 11.926-.352 11.926-5.043 0-2.793-3.308-2.965-7.488-3.227Zm25.761-39.688c1.563 2.004 3.22 4.789 3.22 8.793 0 9.656-7.571 15.316-18.536 15.316-2.789 0-5.312-.348-6.879-.785l-2.87 4.613 8.526.52c15.059.96 23.934 1.398 23.934 12.968 0 10.008-8.789 15.665-23.934 15.665-15.75 0-21.757-4.004-21.757-10.88 0-3.917 1.742-6 4.789-8.878-2.875-1.211-3.828-3.387-3.828-5.739 0-1.914.953-3.656 2.523-5.312 1.566-1.652 3.305-3.305 5.395-5.219-4.262-2.09-7.485-6.617-7.485-13.058 0-10.008 6.613-16.88 19.93-16.88 3.742 0 6.004.344 8.008.872h16.972v7.394l-8.007.61" />
                                        <g clip-path="url(#a)">
                                            <path style="stroke:none;fill-rule:nonzero;fill:#f03c2e;fill-opacity:1"
                                                d="M170.379 16.281c-4.961 0-7.832-2.87-7.832-7.836 0-4.957 2.871-7.656 7.832-7.656 5.05 0 7.922 2.7 7.922 7.656 0 4.965-2.871 7.836-7.922 7.836Zm-11.227 52.305V61.71l4.438-.606c1.219-.175 1.394-.437 1.394-1.746V33.773c0-.953-.261-1.566-1.132-1.824l-4.7-1.656.957-7.047h18.016V59.36c0 1.399.086 1.57 1.395 1.746l4.437.606v6.875h-24.805" />
                                        </g>
                                        <g clip-path="url(#b)">
                                            <path style="stroke:none;fill-rule:nonzero;fill:#f03c2e;fill-opacity:1"
                                                d="M218.371 65.21c-3.742 1.825-9.223 3.481-14.187 3.481-10.356 0-14.27-4.175-14.27-14.015V31.879c0-.524 0-.871-.7-.871h-6.093v-7.746c7.664-.871 10.707-4.703 11.664-14.188h8.27v12.36c0 .609 0 .87.695.87h12.27v8.704h-12.965v20.797c0 5.136 1.218 7.136 5.918 7.136 2.437 0 4.96-.609 7.047-1.39l2.351 7.66" />
                                        </g>
                                        <g clip-path="url(#c)">
                                            <path style="stroke:none;fill-rule:nonzero;fill:#f03c2e;fill-opacity:1"
                                                d="M89.422 42.371 49.629 2.582a5.868 5.868 0 0 0-8.3 0l-8.263 8.262 10.48 10.484a6.965 6.965 0 0 1 7.173 1.668 6.98 6.98 0 0 1 1.656 7.215l10.102 10.105a6.963 6.963 0 0 1 7.214 1.657 6.976 6.976 0 0 1 0 9.875 6.98 6.98 0 0 1-9.879 0 6.987 6.987 0 0 1-1.519-7.594l-9.422-9.422v24.793a6.979 6.979 0 0 1 1.848 1.32 6.988 6.988 0 0 1 0 9.88c-2.73 2.726-7.153 2.726-9.875 0a6.98 6.98 0 0 1 0-9.88 6.893 6.893 0 0 1 2.285-1.523V34.398a6.893 6.893 0 0 1-2.285-1.523 6.988 6.988 0 0 1-1.508-7.637L29.004 14.902 1.719 42.187a5.868 5.868 0 0 0 0 8.301l39.793 39.793a5.868 5.868 0 0 0 8.3 0l39.61-39.605a5.873 5.873 0 0 0 0-8.305" />
                                        </g>
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Git</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in git-gradient-text gradient-text">
                                    Git is a free and open source distributed version control system designed to handle
                                    everything from small to very large projects with speed and efficiency.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in">
                            <v-card href="https://nginx.org/" target="_blank" rounded="xl" hover>
                                <div class="pt-4 fade-in d-flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120px" viewBox="0 0 24.576 12.296"
                                        preserveAspectRatio="xMinYMin meet">
                                        <path
                                            d="M6.01 8.247c-.114 0-.225-.044-.31-.128L3.114 5.533V7.8c0 .24-.196.437-.437.437S2.24 8.052 2.24 7.8V4.48c0-.177.107-.336.27-.404s.35-.03.476.095l2.586 2.586V4.48c0-.24.196-.437.437-.437s.437.196.437.437V7.8c0 .24-.196.437-.437.437m2.023-4.2l-.12.224-.93 1.688-.12.213.12.213.93 1.633.125.224h2.43l.12-.246.694-1.398.31-.634h-.704l-1.775.005c-.23-.003-.443.206-.443.437s.212.44.443.437l1.07-.005-.262.53H8.546l-.683-1.202.688-1.245h1.464l.34.7h.88l-.554-1.328-.12-.246h-2.53m4.426-.005c-.23.003-.434.214-.43.442v1.14h.874v-1.14c.003-.232-.2-.445-.442-.442m1.4 4.215c-.24 0-.437-.196-.437-.437V4.487c0-.24.196-.437.437-.437s.437.196.437.437v2.277l2.586-2.586c.125-.125.313-.162.476-.095s.27.227.27.404V7.82c0 .24-.196.437-.437.437s-.437-.196-.437-.437V5.542l-2.586 2.586c-.082.082-.193.128-.31.128m7.005-2.106l1.36-1.354c.17-.17.17-.447.001-.618s-.447-.17-.618-.001l-1.36 1.357-1.36-1.357c-.17-.17-.448-.17-.618.001s-.17.448.001.618l1.36 1.354L18.27 7.5c-.17.17-.17.447-.001.618.082.083.193.13.3.13s.223-.042.308-.128l1.357-1.353 1.357 1.353c.082.082.193.128.308.128s.224-.043.3-.13c.17-.17.17-.447-.001-.618l-1.355-1.35m-8.406 2.094c-.23-.003-.434-.214-.43-.442v-1.83h.874V7.8c.003.232-.2.445-.442.442"
                                            fill="#090" />
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Nginx</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in nginx-gradient-text gradient-text">
                                    nginx [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a
                                    generic TCP/UDP proxy server, originally written by Igor Sysoev.
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-container>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-container>
                        <div class="fade-in mb-14">
                            <v-card href="https://vuejs.org/" target="_blank" rounded="xl" hover>
                                <div class="fade-in d-flex justify-center">
                                    <svg width="120px" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883" />
                                        <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z"
                                            fill="#35495E" />
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Vue.js</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in vue-gradient-text gradient-text">
                                    Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user
                                    interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a
                                    declarative, component-based programming model that helps you efficiently develop
                                    user interfaces of any complexity.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in mb-14">
                            <v-card href="https://vuetifyjs.com/" target="_blank" rounded="xl" hover>
                                <div class="pt-4 fade-in d-flex justify-center">
                                    <svg width="120px" viewBox="0 0 512 512" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M261.126 140.65L164.624 307.732L256.001 466L377.028 256.5L498.001 47H315.192L261.126 140.65Z"
                                            fill="#1697F6" />
                                        <path
                                            d="M135.027 256.5L141.365 267.518L231.64 111.178L268.731 47H256H14L135.027 256.5Z"
                                            fill="#AEDDFF" />
                                        <path
                                            d="M315.191 47C360.935 197.446 256 466 256 466L164.624 307.732L315.191 47Z"
                                            fill="#1867C0" />
                                        <path d="M268.731 47C76.0026 47 141.366 267.518 141.366 267.518L268.731 47Z"
                                            fill="#7BC6FF" />
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Vuetify</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in vuetify-gradient-text gradient-text">
                                    Vuetify is a no design skills required Open Source UI Library with beautifully
                                    handcrafted Vue Components.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in mb-14">
                            <v-card href="https://www.chartjs.org/" target="_blank" rounded="xl" hover>
                                <div class="pt-4 fade-in d-flex justify-center">
                                    <svg width="120px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192 192"
                                        enable-background="new 0 0 192 192" xml:space="preserve">
                                        <path fill="#36A2EB"
                                            d="M161.271,96.556c-22.368,0.439-17.709,14.599-33.473,18.18c-16.014,3.638-18.542-39.111-34.552-39.111	c-16.012,0-19.559,41.526-39.608,70.034l-0.572,0.807l42.985,24.813l65.22-37.651V96.556z" />
                                        <path fill="#FFCE56"
                                            d="M161.271,95.267c-7.488-9.61-12.567-20.658-23.494-20.658c-19.337,0-14.249,31.545-35.62,31.545	c-21.373,0-23.62-33.931-47.832-2.035c-7.715,10.163-13.925,21.495-18.803,32.218l60.529,34.943l65.22-37.651V95.267z" />
                                        <path opacity="0.8" fill="#FE6184"
                                            d="M30.829,108.334c7.338-20.321,10.505-36.779,24.514-36.779	c21.371,0,26.458,60.039,44.779,53.931c18.318-6.105,16.282-38.669,44.779-38.669c5.424,0,10.962,3.323,16.371,8.698v38.113	l-65.22,37.651l-65.222-37.651V108.334z" />
                                        <path fill="#E7E9ED"
                                            d="M96,176l-69.292-39.999V56L96,16l69.292,40v80L96,176z M34.849,131.301L96,166.602l61.151-35.301V60.7	L96,25.399L34.849,60.7V131.301z" />
                                    </svg>
                                </div>
                                <v-card-title
                                    class="text-h4 font-weight-black text-wrap fade-in">Chart.js</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in chartjs-gradient-text gradient-text">
                                    Chart.js was created and announced in 2013 but has come a long way since then. It’s
                                    open-source, licensed under the very permissive MIT license , and maintained by an
                                    active community.
                                    <br><br>
                                    Among many charting libraries for JavaScript application developers, Chart.js is
                                    currently the most popular one according to GitHub stars (~60,000) and npm downloads
                                    (~2,400,000 weekly).
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in mb-14">
                            <v-card href="https://jquery.com/" target="_blank" rounded="xl" hover>
                                <div class="pt-4 fade-in d-flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="63" width="50%">
                                        <g fill="#131b28">
                                            <path
                                                d="M109.47 22.574v-.002l-1.64 5.808 1.638-5.806zm8.43 12.6l-1.806-.01 1.806.01zm-.465 8.684h.002l-10.82.04 10.82-.04zm2.27-8.663l-1.807-.01 1.807.01zm-1.32 7.925l1.885-7.188-1.885 7.2zm39.836-33.102l-3.5 16.506 3.5-16.506zm-9.024 0l-2.665 12.33 2.665-12.33z" />
                                            <path
                                                d="M157.62 9.275h-7.508a.99.99 0 0 0-.919.741l-5.33 24.663c-.088.407-.5.74-.918.74h-5.314c-5.257 0-4.65-3.636-3.573-8.618l.032-.15.637-3.395.275-1.397 2.424-11.84a.6.6 0 0 0-.606-.744h-7.706a.98.98 0 0 0-.914.742l-3.47 16.464c-1.9 8.714-1.403 17.023 8.97 17.283l.3.006h16.282c.417 0 .83-.334.916-.742l7.022-33a.59.59 0 0 0-.6-.742zm29.952 26.23c.417 0 .7.334.606.742l-.73 3.563m-.728 3.567l.73-3.565-.73 3.567zm-.913.75l-13.837.067 13.836-.067z" />
                                            <path
                                                d="M167.492 30.917c-.006-.4.438-1.062.855-1.062l-.938-.015c-.423 4.25.082 1.078.082 1.078zm5.163 13.276l-.144.001.144-.001zm14.917-8.687c.417 0 .7.334.606.742l-.848 4.144m-11.12 3.792h-.03.03zm-1.844.016h-.107.107zm-.562-.008l-.177.001.177-.001zm-.572.001h-.155.155zm1.026.007h-.455.455zm1.922-.016l-1.8.006 1.8-.006zm9.632-.058l-9.605.06 9.605-.06zm.908-.746l.6-2.985-.6 2.988zm-13.092.813h-.396.396zm-1.12.001h-.536.536zm.567-.001h-.423.423zM63.248 31.006l1.166-5.17-1.333 5.9-1.28 6.02 1.12-5.277.325-1.483zM77.206 9.188H68.96a1 1 0 0 0-.926.739L66.47 16.83a.58.58 0 0 0 .59.74h8.3a.99.99 0 0 0 .92-.74l1.5-6.9c.1-.407-.18-.74-.596-.74zm-1.794 11.48l-2.418 11.187 2.418-11.187zM51.46 57.737l6.8.054a693.83 693.83 0 0 1-6.802-.055z" />
                                            <path
                                                d="M65.58 20.666l-1.167 5.17 1.167-5.17zm9.236-.74h-8.3a1 1 0 0 0-.925.74l-2.334 10.34-.325 1.483L60.7 43.044a15.76 15.76 0 0 1-.4 1.46s-1.552 4.62-4.162 4.567l-2.586-.048a.99.99 0 0 0-.932.723L50.876 57c-.097.405.165.74.58.746l6.802.055c6.52 0 9.956-3.612 12.16-14.006l4.997-23.117c.088-.407-.18-.74-.598-.74zm118.05 23.844c-.417 0-.687-.334-.6-.742l6.25-29.282m3.038 29.28l2.528-12.498-2.528 12.498z" />
                                            <path
                                                d="M192.358 43.4c-.05-.204-.02-.704.067-1.113l2.967-13.9-3.126 14.64c-.088.408.183.742.6.742h.76c-.417 0-1.217-.167-1.267-.37zm8.702.204c-.227.092-.754.167-1.172.167h.76a.97.97 0 0 0 .908-.744l.15-.742c-.083.408-.42 1.227-.646 1.32zm1.76-6.824l1.116-5.516-1.116 5.516zm24.668-21.072l.344 1.423c.095.407-.168.738-.584.74m-25.54 24.414l1.113-5.506-1.113 5.506zm25.438-28.035l.34 1.457-.34-1.457zm-23.2 17.013l.307-1.474 1.192-5.584-1.35 6.325-.15.733zm-5.316-17.996l-3.227 15.12 3.126-14.64.1-.48z" />
                                            <path
                                                d="M227.83 17.13l-.344-1.423-.513-2.195c-.675-2.623-2.657-4.136-6.96-4.136l-19.808-.014a.98.98 0 0 0-.915.741l-.77 3.643-6.092 28.54c-.088.408-.118.908-.067 1.113s.85.37 1.267.37h6.262c.417 0 .945-.075 1.172-.167s.563-.9.646-1.32l2.378-11.755 2.543-11.912a.99.99 0 0 1 .915-.74l19.704-.01c.416-.001.68-.332.584-.74zm25.365-12.864l-1.517.005h-6.307c-.417 0-.95.282-1.187.626l-13.946 20.43c-.236.345-.504.294-.597-.112l-1.026-4.5a1 1 0 0 0-.927-.739h-8.965a.54.54 0 0 0-.55.728l4.017 14.073a3.32 3.32 0 0 1 .02 1.463l-1.75 6.8c-.104.405.153.735.57.735h8.86a1.03 1.03 0 0 0 .946-.735l1.752-6.8a4.53 4.53 0 0 1 .645-1.34l22.64-30.05c.25-.333.115-.604-.3-.6l-2.377.015zM181.97 21.9c-.053.444-.47.776-.887.776h-11.367c-.393 0-.593-.267-.535-.597.003-.01.005-.018.01-.026-.005-.01-.005-.022-.001-.035l.052-.193c1.086-2.886 3.297-4.78 7.453-4.78 4.68 0 5.592 2.286 5.274 4.856zm-3.335-13.12c-14.6 0-18.047 8.856-19.987 17.794-1.94 9.1-1.773 17.628 13.325 17.628h.536l.144-.001h.974.177.562l1.842-.006 9.606-.06c.414-.006.82-.34.905-.745l1.46-7.132c.084-.408-.2-.742-.606-.742H174c-5.398 0-7-1.435-6.4-5.652h21.697a.9.9 0 0 0 .803-.56.77.77 0 0 0 .053-.2c3.22-12.15 2.296-20.333-11.505-20.333zm-68.96 13.075l-.205.727c0 .002-1.64 5.808-1.64 5.808l-1.638 5.805c-.113.4-.547.73-.964.73h-8.672c-6.578 0-8.18-5.144-6.578-12.733 1.6-7.76 4.74-12.586 11.215-13.074 8.847-.667 10.617 5.555 8.48 12.738zm5.947 12.623s4.088-9.927 5.017-15.66C121.906 11.13 118.063 0 103.22 0 88.46 0 82.05 10.628 79.606 22.18c-2.445 11.637.76 21.843 15.434 21.76l22.398-.082a1.05 1.05 0 0 0 .949-.737l1.885-7.2a.56.56 0 0 0-.566-.738l-3.613-.022c-.355-.002-.557-.232-.514-.536a.71.71 0 0 1 .044-.17z" />
                                            <path
                                                d="M188.686 27.824a.5.5 0 0 1-.498.498.5.5 0 0 1-.498-.498c0-.275.223-.497.498-.497s.498.222.498.497z" />
                                        </g>
                                        <path
                                            d="M2.923 14.917c-4.075 5.857-3.568 13.478-.455 19.7.074.15.152.296.228.443l.146.28.1.16.162.3.297.5.17.28.345.54.147.227a23.15 23.15 0 0 0 .5.72c.004.006.01.013.014.02.027.038.057.075.084.113.148.204.3.406.455.605l.17.218.42.517.16.192a27.01 27.01 0 0 0 .586.67c.02.022.027.027.035.037a29.42 29.42 0 0 0 .596.628l.2.192.476.467.195.185a24.43 24.43 0 0 0 .652.593l.124.105.592.5.245.196.494.386.264.2.554.397.202.143c.02.013.036.026.055.04.177.122.358.24.538.356l.233.155a29.94 29.94 0 0 0 .842.516l.233.13.632.355c.115.062.233.12.35.18l.452.235.104.05.185.1.717.332.152.068a26.7 26.7 0 0 0 .836.347l.204.08.8.292.1.035a27.04 27.04 0 0 0 .88.288l.212.063c.3.1.598.2.908.257 19.7 3.594 25.433-11.844 25.433-11.844-4.808 6.264-13.343 7.916-21.43 6.077-.306-.07-.603-.165-.902-.253l-.225-.068c-.292-.1-.58-.184-.87-.283l-.12-.043a27.21 27.21 0 0 1-.766-.284l-.215-.085c-.278-.1-.554-.224-.827-.344l-.165-.073-.698-.325-.202-.097-.54-.275-.36-.2a20.85 20.85 0 0 1-.647-.363l-.22-.122a28.69 28.69 0 0 1-.842-.516l-.227-.152-.6-.398c-.066-.045-.13-.092-.193-.136l-.567-.4-.75-.6-.228-.183-.637-.537c-.022-.02-.046-.038-.07-.06l-.87-.78-.48-.47-.2-.2-.6-.624-.03-.03a23.56 23.56 0 0 1-.599-.681l-.157-.186-.43-.532-.158-.197-.498-.662c-4.5-6.124-6.102-14.57-2.514-21.506m9.483-.906c-2.947 4.24-2.787 9.918-.488 14.404a19.17 19.17 0 0 0 1.303 2.176c.442.633.93 1.386 1.517 1.894a17.75 17.75 0 0 0 .66.686l.174.172a18.32 18.32 0 0 0 .676.628c.01.007.018.017.027.024a21.07 21.07 0 0 0 .796.66l.18.14a19.37 19.37 0 0 0 .825.603l.024.018c.124.086.25.166.377.248l.178.118c.2.13.405.254.612.375.03.018.058.033.087.05l.54.302c.063.036.128.067.192.1l.378.196c.02.01.04.018.057.026a20.35 20.35 0 0 0 .79.368c.057.025.116.048.174.072l.647.263.277.1c.197.073.395.14.594.207l.27.086c.283.088.563.2.86.248 15.217 2.52 18.73-9.195 18.73-9.195-3.167 4.56-9.3 6.737-15.844 5.038a18.79 18.79 0 0 1-.862-.249c-.087-.026-.172-.055-.26-.084a18.66 18.66 0 0 1-.603-.208l-.272-.1-.65-.26-.175-.074c-.27-.117-.533-.24-.794-.37l-.398-.203-.23-.118c-.17-.092-.338-.187-.504-.284l-.12-.068a19.81 19.81 0 0 1-.61-.372c-.062-.04-.122-.082-.184-.123l-.395-.26a21.17 21.17 0 0 1-.822-.602l-.185-.146c-2.865-2.262-5.135-5.352-6.215-8.857-1.13-3.635-.887-7.715 1.073-11.026m8.213-.28c-1.737 2.557-1.908 5.732-.702 8.556 1.27 2.997 3.876 5.35 6.917 6.464l.378.13.167.053.542.156c8.402 1.623 10.68-4.312 11.288-5.185-1.996 2.874-5.35 3.564-9.468 2.565a10.93 10.93 0 0 1-.996-.308 10.45 10.45 0 0 1-1.183-.5c-.73-.35-1.428-.777-2.074-1.265-3.684-2.795-5.972-8.126-3.568-12.47m93.33 51.594l-2.422 5.516h-2.674l.22-5.012L114 61.6h-2.6l-.068-5.516.286-1.362h1.833l-.353 5.448 2.035-5.448h2.556l-.185 5.516 2.018-5.516h1.597l-.286 1.362zm4.218 1.643c.236-1.077.168-1.278-.387-1.278h-.84l-.538 2.523-.824 2.64h-1.564l1.463-6.86h1.43l.185.403s.824-.487 1.63-.487c1.716 0 1.582 1.294 1.2 3.06h-1.765zm5.08-3.853c-.7 0-1.126-.202-.958-1.042.185-.842.723-1.043 1.395-1.043s1.127.202.942 1.043c-.168.824-.706 1.042-1.38 1.042zm-.74 7.736h-1.548l.303-2.7.538-2.5-1.076-.236.303-1.462h2.942l-1.462 6.878zm6.7-5.42l-1.934.236-.556 2.624c-.152.723-.152.925.488.925h1.295l-.27 1.38s-1.176.353-1.682.353c-1.984 0-1.968-1.093-1.614-2.725l.538-2.572-1.077-.235.32-1.463h1.127l.64-1.733h1.53l-.37 1.733h1.884l-.32 1.48zm4.018.088c-.908 0-1.38.47-1.564 1.312l2.6-.218c.118-.572 0-1.093-1.026-1.093zm-1.816 2.556c-.12.842.2 1.127 1.277 1.127h2.707l-.27 1.278s-1.63.454-2.842.454c-3 0-3.044-1.697-2.657-3.514.387-1.783 1.076-3.548 3.985-3.548 2.8 0 2.944 1.697 2.254 4.203h-4.456zm10.638 2.765h-1.546l.303-2.7 1.093-5.113-1.077-.252.32-1.463h2.944l-2.036 9.518zm5.588-5.32c-.9 0-1.38.47-1.565 1.312l2.6-.218c.117-.572 0-1.093-1.025-1.093zm-1.817 2.556c-.118.842.202 1.127 1.278 1.127h2.708l-.27 1.278s-1.632.454-2.843.454c-3 0-3.043-1.697-2.657-3.514.387-1.783 1.077-3.548 3.986-3.548 2.8 0 2.943 1.697 2.254 4.203h-4.457zm11.552-2.473l-2.506.017c-1.144 0-1.262.352-1.345.722l-.068.337 3.633.27s.017 1.16-.135 1.816c-.218 1.093-1.345 2.202-3.38 2.202-1 0-2.64-.386-2.64-.386l.286-1.33h2.506c1.1 0 1.262-.303 1.33-.605l.084-.437-3.565-.27s-.134-.892.05-1.782c.27-1.212 1.38-2.254 3.414-2.254 1 0 2.64.37 2.64.37l-.303 1.33zm6.76 0l-2.506.017c-1.144 0-1.26.352-1.345.722l-.068.337 3.633.27s.017 1.16-.135 1.816c-.218 1.093-1.345 2.202-3.38 2.202-1 0-2.64-.386-2.64-.386l.286-1.33h2.506c1.1 0 1.26-.303 1.33-.605l.084-.437-3.565-.27s-.134-.892.05-1.782c.27-1.212 1.38-2.254 3.414-2.254 1 0 2.64.37 2.64.37l-.303 1.33zm2.118 6.342H171.8l.05-1c-.488-.032-.74-.386-.623-.975.185-.84.707-1.042 1.396-1.042.673 0 1.126.202.942 1.042l-.42 1.985zm8.997-6.273c-1 0-1.36.605-1.597 1.715s-.168 1.765.84 1.765h1.396l.774-3.48h-1.413zm2.304 4.288l-.186.892-1.412-.017-.202-.437s-1.245.537-2.085.537c-2.153 0-2.254-1.765-1.868-3.548.387-1.817 1.228-3.532 3.364-3.532.774 0 1.816.387 1.816.387l.858-2.9h1.548l-1.833 8.627zM190 56.363c-1.3 0-1.733.74-1.968 1.816-.218 1.093-.117 1.833 1.177 1.833 1.346 0 1.75-.723 1.984-1.833.236-1.043.168-1.816-1.194-1.816zm-1.143 5.348c-2.775 0-2.994-1.732-2.624-3.532.387-1.8 1.363-3.514 4.138-3.514 2.757 0 3 1.715 2.623 3.514-.386 1.833-1.362 3.532-4.136 3.532zm15.743-.1l.303-2.657.15-.757c.22-1 .353-1.75-.707-1.75h-.824c.034.522-.068 1.1-.202 1.732l-.723 3.43h-1.564l.303-2.657.15-.757c.22-1 .353-1.75-.705-1.75h-.673l-1.1 5.163h-1.8l1.463-6.878h1.413l.218.42s.96-.505 1.733-.505c.588 0 1.026.27 1.178.605.336-.185 1.295-.605 1.985-.605 2.15 0 2.085 1.75 1.697 3.532l-.723 3.43h-1.564zm7.16-5.248c-1.312 0-1.733.74-1.968 1.816-.218 1.093-.117 1.833 1.177 1.833 1.345 0 1.75-.723 1.985-1.833.235-1.043.168-1.816-1.194-1.816zm-1.144 5.348c-2.776 0-2.994-1.732-2.624-3.532.387-1.8 1.362-3.514 4.137-3.514 2.76 0 3 1.715 2.623 3.514-.386 1.833-1.362 3.532-4.137 3.532zm8.8-3.983c.235-1.077.168-1.278-.386-1.278h-.842l-.538 2.523-.824 2.64h-1.564l1.463-6.86h1.43l.184.403s.824-.487 1.632-.487c1.715 0 1.58 1.294 1.2 3.06h-1.765zm6.024-1.448c-.907 0-1.38.47-1.563 1.312l2.588-.218c.12-.572 0-1.093-1.025-1.093zm-1.816 2.556c-.117.842.202 1.127 1.278 1.127h2.708l-.27 1.278s-1.632.454-2.842.454c-3 0-3.044-1.697-2.658-3.514.387-1.783 1.077-3.548 3.986-3.548 2.808 0 2.944 1.697 2.254 4.203h-4.457zm5.966 2.876c-.707 0-1.143-.202-.958-1.025.167-.843.7-1.043 1.396-1.043.655 0 1.1.2.942 1.043-.186.807-.723 1.025-1.38 1.025z"
                                            fill="#0868ac" />
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">jQuery</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in jquery-gradient-text gradient-text">
                                    jQuery is a fast, small, and feature-rich JavaScript library. It makes things like
                                    HTML document traversal and manipulation, event handling, animation, and Ajax much
                                    simpler with an easy-to-use API that works across a multitude of browsers. With a
                                    combination of versatility and extensibility, jQuery has changed the way that
                                    millions of people write JavaScript.
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="fade-in">
                            <v-card href="https://www.docker.com/" target="_blank" rounded="xl" hover>
                                <div class="pt-7 fade-in d-flex justify-center">
                                    <svg width="120px" viewBox="0 0 256 215" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <path
                                                d="M38.6169038,173.984134 L38.6169038,157.621556 C38.6169038,155.47287 39.9611715,153.744603 42.1864435,153.744603 L42.8034142,153.744603 C45.0281506,153.744603 46.3659916,155.473941 46.3659916,157.621556 L46.3659916,192.069088 C46.3659916,200.469423 42.215364,207.152736 34.9841674,211.411013 C31.6309958,213.384033 27.9259582,214.396251 24.0388285,214.396251 L22.5022929,214.396251 C14.1003515,214.396251 7.42453556,210.242946 3.15983264,203.015498 C1.1809205,199.660184 0.175665272,195.960502 0.175665272,192.069088 L0.175665272,190.533623 C0.175665272,182.130611 4.32843515,175.451046 11.5542762,171.185272 C14.9101255,169.204218 18.6098075,168.200033 22.5022929,168.200033 L24.0388285,168.200033 C29.7249205,168.200033 34.5492887,170.403883 38.6169038,173.984134 L38.6169038,173.984134 Z M7.92368201,191.300017 C7.92368201,197.367967 10.8650042,201.929908 16.1820921,204.839096 C18.3318494,206.015732 20.6663766,206.647699 23.1192636,206.647699 C29.0752803,206.647699 33.4926192,203.838126 36.5399833,198.790962 C37.9570879,196.44251 38.6169038,193.874477 38.6169038,191.143096 C38.6169038,185.882778 36.1265272,181.778209 31.8880669,178.729238 C29.3178912,176.881004 26.4247699,175.953941 23.2697573,175.953941 C16.7781757,175.953941 12.1064435,179.233205 9.30222594,185.059615 C8.35588285,187.029423 7.92368201,189.121339 7.92368201,191.300017 L7.92368201,191.300017 Z M73.2481339,168.200033 L74.3219414,168.200033 C83.3001506,168.200033 90.1275314,172.555247 94.4548954,180.392167 C96.1853054,183.527364 97.1107615,186.948552 97.1107615,190.533623 L97.1107615,192.069088 C97.1107615,200.468887 92.9687029,207.162377 85.7257238,211.412084 C82.3725523,213.378678 78.6685858,214.396251 74.7825272,214.396251 L73.2481339,214.396251 C64.8461925,214.396251 58.1693054,210.242946 53.9056736,203.015498 C51.9267615,199.660184 50.919364,195.960502 50.919364,192.069088 L50.919364,190.533623 C50.919364,182.12954 55.0876653,175.471933 62.2958326,171.187414 C65.6473975,169.195649 69.3535063,168.200033 73.2481339,168.200033 L73.2481339,168.200033 Z M58.6673808,191.300017 C58.6673808,197.190159 61.5583598,201.522879 66.5332218,204.569172 C68.8693556,206.000201 71.4416736,206.647699 74.1714477,206.647699 C79.991431,206.647699 84.2930879,203.696736 87.287431,198.784536 C88.7152469,196.44251 89.3611381,193.870192 89.3611381,191.143096 C89.3611381,185.66641 86.7229456,181.482042 82.2134895,178.449674 C79.7418577,176.786745 76.9906611,175.953941 74.0145272,175.953941 C67.5229456,175.953941 62.8512134,179.233205 60.0480669,185.059615 C59.0995816,187.029423 58.6673808,189.121339 58.6673808,191.300017 L58.6673808,191.300017 Z M129.324452,176.573054 C128.154778,176.025172 125.964318,175.843079 124.699849,175.794879 C118.225941,175.551197 113.541891,179.196787 110.793908,184.90805 C109.845423,186.877858 109.412151,188.963347 109.412151,191.143096 C109.412151,197.780351 112.896536,202.426912 118.820954,205.259515 C120.985172,206.29369 123.779213,206.490778 126.144268,206.490778 C128.224937,206.490778 131.164117,205.215598 133.010209,204.338879 L133.330477,204.187314 L134.762577,204.187314 L134.920569,204.219448 C136.683113,204.585774 138.013456,205.702962 138.013456,207.599397 L138.013456,208.366326 C138.013456,213.083582 129.391397,214.164351 126.101423,214.393573 C114.491448,215.197456 105.808335,208.821021 102.498008,197.746611 C101.922812,195.824469 101.664134,193.914109 101.664134,191.910025 L101.664134,190.376703 C101.664134,181.97369 105.833506,175.318226 113.040603,171.036385 C116.392167,169.046226 120.098276,168.046862 123.991833,168.046862 L125.527297,168.046862 C129.657038,168.046862 133.461155,169.219749 136.871096,171.548921 L137.151732,171.742795 L137.328469,172.034678 C137.696402,172.645222 138.013456,173.350561 138.013456,174.077322 L138.013456,174.844251 C138.013456,176.822092 136.53369,177.885724 134.747046,178.230092 L134.59923,178.256335 L134.141322,178.256335 C132.984502,178.256335 130.356485,177.058812 129.324452,176.573054 L129.324452,176.573054 Z M154.457975,181.819983 C157.467314,178.80636 160.488435,175.798092 163.542762,172.833741 C164.39431,172.007364 167.617339,168.507448 168.886092,168.507448 L170.274276,168.507448 L170.432268,168.539582 C172.199632,168.906979 173.524084,170.02631 173.524084,171.925958 L173.524084,172.692351 C173.524084,173.988418 172.006293,175.493891 171.169205,176.380787 C169.388987,178.267582 167.51451,180.093322 165.692519,181.941556 L156.331381,191.444619 C160.362042,195.484385 164.388954,199.528435 168.386946,203.599264 C169.492887,204.725021 170.599364,205.852385 171.688167,206.994745 C172.073238,207.399632 172.641473,207.903598 172.964418,208.465406 C173.310929,208.990795 173.524084,209.583665 173.524084,210.216703 L173.524084,211.017908 L173.479096,211.202142 C173.043682,212.969506 171.921674,214.396251 169.962577,214.396251 L169.346142,214.396251 C168.064,214.396251 166.616368,212.945406 165.737506,212.117423 C163.928904,210.411113 162.18082,208.616971 160.407029,206.874243 L154.457975,201.034444 L154.457975,210.368268 C154.457975,212.518025 153.1121,214.245757 150.888971,214.245757 L150.278427,214.245757 C148.053155,214.245757 146.709423,212.518025 146.709423,210.368268 L146.709423,157.77205 C146.709423,155.621222 148.054226,153.901523 150.278427,153.901523 L150.888971,153.901523 C153.1121,153.901523 154.457975,155.621222 154.457975,157.77205 L154.457975,181.819983 L154.457975,181.819983 Z M251.035314,168.507448 L251.804385,168.507448 C254.128736,168.507448 255.679732,170.073439 255.679732,172.383866 C255.679732,175.5919 252.613088,176.412921 249.959364,176.412921 C246.479264,176.412921 243.157155,178.519833 240.75836,180.882745 C237.766695,183.831565 236.457238,187.608904 236.457238,191.760603 L236.457238,210.519833 C236.457238,212.670661 235.115113,214.396251 232.887163,214.396251 L232.276084,214.396251 C230.049205,214.396251 228.707079,212.670661 228.707079,210.519833 L228.707079,190.684117 C228.707079,183.066778 232.415331,176.849406 238.596285,172.488301 C242.288469,169.882778 246.515682,168.507448 251.035314,168.507448 L251.035314,168.507448 Z M195.960502,205.683146 C198.780251,206.667515 201.995782,206.527197 204.888904,206.02323 C206.368134,205.394477 210.152971,203.743866 211.544904,203.985406 L211.762343,204.021824 L211.962109,204.120368 C212.811515,204.532218 213.623431,205.114912 214.056703,205.979314 C215.071063,208.007498 214.583699,210.044787 212.591933,211.195715 L211.928904,211.578644 C204.578276,215.821389 196.760636,215.233339 189.434109,211.270695 C185.930979,209.377473 183.251013,206.565757 181.274243,203.139213 L180.811515,202.338008 C176.093188,194.16636 176.729975,185.570008 182.051347,177.798962 C183.88887,175.113105 186.289808,173.037791 189.097238,171.415029 L190.159264,170.802343 C197.081439,166.806494 204.500084,167.079632 211.609707,170.587046 C215.432033,172.47277 218.529205,175.284485 220.663431,178.980954 L221.046895,179.646661 C222.597356,182.332519 220.588987,184.673473 218.515816,186.273205 C216.110059,188.129473 213.680736,190.362778 211.374594,192.353473 C206.233172,196.791699 201.099247,201.240636 195.960502,205.683146 L195.960502,205.683146 Z M189.305573,201.009272 C195.056469,196.078326 200.808435,191.144167 206.542728,186.193406 C208.50236,184.503163 210.651582,182.749188 212.596218,180.971649 C211.035582,179.006126 208.430059,177.589021 206.215498,176.7439 C201.746745,175.040803 197.339046,175.612787 193.240368,177.978912 C187.874544,181.076619 185.589824,186.010243 185.790661,192.149423 C185.869389,194.566962 186.5201,196.896669 187.803314,198.953774 C188.255331,199.678929 188.760368,200.359632 189.305573,201.009272 L189.305573,201.009272 Z"
                                                fill="#364548"></path>
                                            <path
                                                d="M147.487598,45.7324184 L170.35354,45.7324184 L170.35354,69.1071464 L181.915314,69.1071464 C187.25436,69.1071464 192.746042,68.1559833 197.80231,66.4427113 C200.286795,65.6002678 203.075481,64.4279163 205.526226,62.9535063 C202.298377,58.7391464 200.650444,53.4177741 200.165222,48.1724519 C199.506477,41.0381925 200.94554,31.7520335 205.774192,26.1682343 L208.177808,23.3881172 L211.042008,25.6905105 C218.253389,31.484251 224.318126,39.5798494 225.387113,48.8087029 C234.070226,46.2545941 244.264703,46.8587113 251.91846,51.2760502 L255.058477,53.0878661 L253.405724,56.3135732 C246.932887,68.946477 233.40077,72.8598494 220.170711,72.167364 C200.373556,121.475749 157.272904,144.81995 105.013556,144.81995 C78.0146611,144.81995 53.2437155,134.72723 39.1380084,110.773021 L38.9066444,110.382059 L36.851682,106.200904 C32.0835481,95.6567029 30.4998828,84.1056402 31.5742259,72.5642176 L31.896636,69.1071464 L51.4495732,69.1071464 L51.4495732,45.7324184 L74.3149791,45.7324184 L74.3149791,22.8659414 L120.047933,22.8659414 L120.047933,0 L147.487598,0 L147.487598,45.7324184"
                                                fill="#364548"></path>
                                            <path
                                                d="M221.570142,54.3796485 C223.103464,42.4644017 214.18631,33.1048703 208.656067,28.6612887 C202.283381,36.0290544 201.293121,55.3388452 211.291046,63.4687197 C205.711531,68.4248368 193.953741,72.9171548 181.915314,72.9171548 L35.3703096,72.9171548 C34.1995649,85.4841841 36.4060921,97.0566695 41.4446862,106.962477 L43.1118996,110.011448 C44.1674979,111.802912 45.320569,113.531715 46.5668285,115.196251 L46.567364,115.196251 C52.5919331,115.582929 58.1468117,115.71682 63.2287866,115.604351 L63.2309289,115.604351 C73.2181423,115.383163 81.3667615,114.204921 87.5428954,112.064803 C88.4624603,111.745071 89.4645021,112.232971 89.7826276,113.151464 C90.1002176,114.069958 89.6139247,115.072536 88.695431,115.391197 C87.87441,115.675582 87.0180418,115.941757 86.1338243,116.194544 C86.1327531,116.195079 86.131682,116.195079 86.1306109,116.195615 C81.267682,117.583799 76.0534226,118.51836 69.3251213,118.933423 C69.7241172,118.939849 68.9089874,118.993406 68.9068452,118.993941 C68.678159,119.007866 68.3900251,119.040536 68.1602678,119.053389 C65.5124351,119.201741 62.6541255,119.232803 59.7320837,119.232803 C56.5363682,119.232803 53.3888536,119.172285 49.8701925,118.993941 L49.7802176,119.053389 C61.9905607,132.777238 81.0823766,141.008335 105.013556,141.008335 C155.661925,141.008335 198.622259,118.556385 217.645523,68.1506276 C231.142293,69.5355983 244.113138,66.0940586 250.013456,54.5762008 C240.614828,49.1525356 228.529272,50.8818745 221.570142,54.3796485"
                                                fill="#22A0C8"></path>
                                            <path
                                                d="M221.570142,54.3796485 C223.103464,42.4644017 214.18631,33.1048703 208.656067,28.6612887 C202.283381,36.0290544 201.293121,55.3388452 211.291046,63.4687197 C205.711531,68.4248368 193.953741,72.9171548 181.915314,72.9171548 L44.0480669,72.9171548 C43.449841,92.1632134 50.5921339,106.772351 63.2287866,115.604351 L63.2309289,115.604351 C73.2181423,115.383163 81.3667615,114.204921 87.5428954,112.064803 C88.4624603,111.745071 89.4645021,112.232971 89.7826276,113.151464 C90.1002176,114.069958 89.6139247,115.072536 88.695431,115.391197 C87.87441,115.675582 87.0180418,115.941757 86.1338243,116.194544 C86.1327531,116.195079 86.131682,116.195079 86.1306109,116.195615 C81.267682,117.583799 75.6051548,118.638326 68.8768536,119.053389 C68.8752469,119.053389 68.7140418,118.89754 68.7118996,118.898075 C85.9485188,127.739715 110.942259,127.708117 139.597121,116.700653 C171.727799,104.35749 201.625707,80.8408368 222.487565,53.9436987 C222.172653,54.0856234 221.86631,54.2312971 221.570142,54.3796485"
                                                fill="#37B1D9"></path>
                                            <path
                                                d="M35.6445188,88.1861088 C36.5555146,94.9176234 38.524251,101.220686 41.4446862,106.962477 L43.1118996,110.011448 C44.1674979,111.802912 45.320569,113.531715 46.567364,115.196251 C52.5930042,115.582929 58.1484184,115.71682 63.2309289,115.604351 C73.2181423,115.383163 81.3667615,114.204921 87.5428954,112.064803 C88.4624603,111.745071 89.4645021,112.232971 89.7826276,113.151464 C90.1002176,114.069958 89.6139247,115.072536 88.695431,115.391197 C87.87441,115.675582 87.0180418,115.941757 86.1338243,116.194544 C86.1327531,116.195079 86.131682,116.195079 86.1306109,116.195615 C81.267682,117.583799 75.6351464,118.578343 68.9068452,118.993941 C68.6760167,119.007866 68.273272,119.010544 68.0403013,119.023397 C65.3935397,119.172285 62.5646862,119.262795 59.6421088,119.262795 C56.4469289,119.262795 53.1794477,119.201741 49.6613222,119.023397 C61.8711297,132.747247 81.0823766,141.008335 105.013556,141.008335 C148.373423,141.008335 186.09754,124.550427 207.992502,88.1861088 L35.6445188,88.1861088"
                                                fill="#1B81A5"></path>
                                            <path
                                                d="M45.3671632,88.1861088 C47.9592971,100.00549 54.1884519,109.284686 63.2309289,115.604351 C73.2181423,115.383163 81.3667615,114.204921 87.5428954,112.064803 C88.4624603,111.745071 89.4645021,112.232971 89.7826276,113.151464 C90.1002176,114.069958 89.6139247,115.072536 88.695431,115.391197 C87.87441,115.675582 87.0180418,115.941757 86.1338243,116.194544 C86.1327531,116.195079 86.131682,116.195079 86.1306109,116.195615 C81.267682,117.583799 75.5157155,118.578343 68.7874142,118.993941 C86.0229623,127.833975 110.944402,127.707046 139.597121,116.700653 C156.931213,110.040904 173.614059,100.126527 188.58149,88.1861088 L45.3671632,88.1861088"
                                                fill="#1D91B4"></path>
                                            <path
                                                d="M55.2606527,49.5429623 L75.0776234,49.5429623 L75.0776234,69.3610042 L55.2606527,69.3610042 L55.2606527,49.5429623 Z M56.9112636,51.1946444 L58.475113,51.1946444 L58.475113,67.7103933 L56.9112636,67.7103933 L56.9112636,51.1946444 Z M59.8515146,51.1946444 L61.4780251,51.1946444 L61.4780251,67.7103933 L59.8515146,67.7103933 L59.8515146,51.1946444 Z M62.8533556,51.1946444 L64.4798661,51.1946444 L64.4798661,67.7103933 L62.8533556,67.7103933 L62.8533556,51.1946444 Z M65.8568033,51.1946444 L67.4833138,51.1946444 L67.4833138,67.7103933 L65.8568033,67.7103933 L65.8568033,51.1946444 Z M68.8597155,51.1946444 L70.4862259,51.1946444 L70.4862259,67.7103933 L68.8597155,67.7103933 L68.8597155,51.1946444 Z M71.8620921,51.1946444 L73.4270126,51.1946444 L73.4270126,67.7103933 L71.8620921,67.7103933 L71.8620921,51.1946444 Z"
                                                fill="#23A3C2"></path>
                                            <path
                                                d="M78.125523,26.6770209 L97.944636,26.6770209 L97.944636,46.4939916 L78.125523,46.4939916 L78.125523,26.6770209 Z M79.7782762,28.3287029 L81.3410544,28.3287029 L81.3410544,44.8428452 L79.7782762,44.8428452 L79.7782762,28.3287029 Z M82.7185272,28.3287029 L84.3439665,28.3287029 L84.3439665,44.8428452 L82.7185272,44.8428452 L82.7185272,28.3287029 Z M85.7198326,28.3287029 L87.3463431,28.3287029 L87.3463431,44.8428452 L85.7198326,44.8428452 L85.7198326,28.3287029 Z M88.7227448,28.3287029 L90.3492552,28.3287029 L90.3492552,44.8428452 L88.7227448,44.8428452 L88.7227448,28.3287029 Z M91.7261925,28.3287029 L93.3527029,28.3287029 L93.3527029,44.8428452 L91.7261925,44.8428452 L91.7261925,28.3287029 Z M94.7280335,28.3287029 L96.2940251,28.3287029 L96.2940251,44.8428452 L94.7280335,44.8428452 L94.7280335,28.3287029 Z"
                                                fill="#23A3C2"></path>
                                            <path
                                                d="M78.125523,49.5429623 L97.944636,49.5429623 L97.944636,69.3610042 L78.125523,69.3610042 L78.125523,49.5429623 Z M79.7782762,51.1946444 L81.3410544,51.1946444 L81.3410544,67.7103933 L79.7782762,67.7103933 L79.7782762,51.1946444 Z M82.7185272,51.1946444 L84.3439665,51.1946444 L84.3439665,67.7103933 L82.7185272,67.7103933 L82.7185272,51.1946444 Z M85.7198326,51.1946444 L87.3463431,51.1946444 L87.3463431,67.7103933 L85.7198326,67.7103933 L85.7198326,51.1946444 Z M88.7227448,51.1946444 L90.3492552,51.1946444 L90.3492552,67.7103933 L88.7227448,67.7103933 L88.7227448,51.1946444 Z M91.7261925,51.1946444 L93.3527029,51.1946444 L93.3527029,67.7103933 L91.7261925,67.7103933 L91.7261925,51.1946444 Z M94.7280335,51.1946444 L96.2940251,51.1946444 L96.2940251,67.7103933 L94.7280335,67.7103933 L94.7280335,51.1946444 Z"
                                                fill="#34BBDE"></path>
                                            <path
                                                d="M100.992536,49.5429623 L120.810577,49.5429623 L120.810577,69.3610042 L100.992536,69.3610042 L100.992536,49.5429623 Z M102.644218,51.1946444 L104.206996,51.1946444 L104.206996,67.7103933 L102.644218,67.7103933 L102.644218,51.1946444 Z M105.583933,51.1946444 L107.210444,51.1946444 L107.210444,67.7103933 L105.583933,67.7103933 L105.583933,51.1946444 Z M108.586845,51.1946444 L110.213356,51.1946444 L110.213356,67.7103933 L108.586845,67.7103933 L108.586845,51.1946444 Z M111.589757,51.1946444 L113.216268,51.1946444 L113.216268,67.7103933 L111.589757,67.7103933 L111.589757,51.1946444 Z M114.592134,51.1946444 L116.219715,51.1946444 L116.219715,67.7103933 L114.592134,67.7103933 L114.592134,51.1946444 Z M117.595046,51.1946444 L119.158895,51.1946444 L119.158895,67.7103933 L117.595046,67.7103933 L117.595046,51.1946444 Z"
                                                fill="#23A3C2"></path>
                                            <path
                                                d="M100.992536,26.6770209 L120.810577,26.6770209 L120.810577,46.4939916 L100.992536,46.4939916 L100.992536,26.6770209 Z M102.644218,28.3287029 L104.206996,28.3287029 L104.206996,44.8428452 L102.644218,44.8428452 L102.644218,28.3287029 Z M105.583933,28.3287029 L107.210444,28.3287029 L107.210444,44.8428452 L105.583933,44.8428452 L105.583933,28.3287029 Z M108.586845,28.3287029 L110.213356,28.3287029 L110.213356,44.8428452 L108.586845,44.8428452 L108.586845,28.3287029 Z M111.589757,28.3287029 L113.216268,28.3287029 L113.216268,44.8428452 L111.589757,44.8428452 L111.589757,28.3287029 Z M114.592134,28.3287029 L116.219715,28.3287029 L116.219715,44.8428452 L114.592134,44.8428452 L114.592134,28.3287029 Z M117.595046,28.3287029 L119.158895,28.3287029 L119.158895,44.8428452 L117.595046,44.8428452 L117.595046,28.3287029 Z"
                                                fill="#34BBDE"></path>
                                            <path
                                                d="M123.859013,49.5429623 L143.676519,49.5429623 L143.676519,69.3610042 L123.859013,69.3610042 L123.859013,49.5429623 Z M125.510695,51.1946444 L127.074008,51.1946444 L127.074008,67.7103933 L125.510695,67.7103933 L125.510695,51.1946444 Z M128.450946,51.1946444 L130.077456,51.1946444 L130.077456,67.7103933 L128.450946,67.7103933 L128.450946,51.1946444 Z M131.452787,51.1946444 L133.079297,51.1946444 L133.079297,67.7103933 L131.452787,67.7103933 L131.452787,51.1946444 Z M134.456234,51.1946444 L136.082745,51.1946444 L136.082745,67.7103933 L134.456234,67.7103933 L134.456234,51.1946444 Z M137.459146,51.1946444 L139.085657,51.1946444 L139.085657,67.7103933 L137.459146,67.7103933 L137.459146,51.1946444 Z M140.461523,51.1946444 L142.025908,51.1946444 L142.025908,67.7103933 L140.461523,67.7103933 L140.461523,51.1946444 Z"
                                                fill="#34BBDE"></path>
                                            <path
                                                d="M123.859013,26.6770209 L143.676519,26.6770209 L143.676519,46.4939916 L123.859013,46.4939916 L123.859013,26.6770209 Z M125.510695,28.3287029 L127.074008,28.3287029 L127.074008,44.8428452 L125.510695,44.8428452 L125.510695,28.3287029 Z M128.450946,28.3287029 L130.077456,28.3287029 L130.077456,44.8428452 L128.450946,44.8428452 L128.450946,28.3287029 Z M131.452787,28.3287029 L133.079297,28.3287029 L133.079297,44.8428452 L131.452787,44.8428452 L131.452787,28.3287029 Z M134.456234,28.3287029 L136.082745,28.3287029 L136.082745,44.8428452 L134.456234,44.8428452 L134.456234,28.3287029 Z M137.459146,28.3287029 L139.085657,28.3287029 L139.085657,44.8428452 L137.459146,44.8428452 L137.459146,28.3287029 Z M140.461523,28.3287029 L142.025908,28.3287029 L142.025908,44.8428452 L140.461523,44.8428452 L140.461523,28.3287029 Z"
                                                fill="#23A3C2"></path>
                                            <path
                                                d="M123.859013,3.81054393 L143.676519,3.81054393 L143.676519,23.6285858 L123.859013,23.6285858 L123.859013,3.81054393 Z M125.510695,5.46115481 L127.074008,5.46115481 L127.074008,21.9769038 L125.510695,21.9769038 L125.510695,5.46115481 Z M128.450946,5.46115481 L130.077456,5.46115481 L130.077456,21.9769038 L128.450946,21.9769038 L128.450946,5.46115481 Z M131.452787,5.46115481 L133.079297,5.46115481 L133.079297,21.9769038 L131.452787,21.9769038 L131.452787,5.46115481 Z M134.456234,5.46115481 L136.082745,5.46115481 L136.082745,21.9769038 L134.456234,21.9769038 L134.456234,5.46115481 Z M137.459146,5.46115481 L139.085657,5.46115481 L139.085657,21.9769038 L137.459146,21.9769038 L137.459146,5.46115481 Z M140.461523,5.46115481 L142.025908,5.46115481 L142.025908,21.9769038 L140.461523,21.9769038 L140.461523,5.46115481 Z"
                                                fill="#34BBDE"></path>
                                            <path
                                                d="M146.724954,49.5429623 L166.542996,49.5429623 L166.542996,69.3610042 L146.724954,69.3610042 L146.724954,49.5429623 Z M148.375565,51.1946444 L149.940485,51.1946444 L149.940485,67.7103933 L148.375565,67.7103933 L148.375565,51.1946444 Z M151.315816,51.1946444 L152.942326,51.1946444 L152.942326,67.7103933 L151.315816,67.7103933 L151.315816,51.1946444 Z M154.319264,51.1946444 L155.945774,51.1946444 L155.945774,67.7103933 L154.319264,67.7103933 L154.319264,51.1946444 Z M157.321105,51.1946444 L158.947615,51.1946444 L158.947615,67.7103933 L157.321105,67.7103933 L157.321105,51.1946444 Z M160.325088,51.1946444 L161.951063,51.1946444 L161.951063,67.7103933 L160.325088,67.7103933 L160.325088,51.1946444 Z M163.327464,51.1946444 L164.891314,51.1946444 L164.891314,67.7103933 L163.327464,67.7103933 L163.327464,51.1946444 Z"
                                                fill="#23A3C2"></path>
                                            <path
                                                d="M96.7037322,101.491682 C99.7227113,101.491682 102.170243,103.940285 102.170243,106.959264 C102.170243,109.978243 99.7227113,112.425774 96.7037322,112.425774 C93.6842176,112.425774 91.2361506,109.978243 91.2361506,106.959264 C91.2361506,103.940285 93.6842176,101.491682 96.7037322,101.491682"
                                                fill="#D3ECEC"></path>
                                            <path
                                                d="M96.7037322,103.042678 C97.2039498,103.042678 97.6811381,103.136937 98.1213724,103.307782 C97.6441841,103.583598 97.3212385,104.100418 97.3212385,104.691682 C97.3212385,105.574293 98.0367531,106.288736 98.919364,106.288736 C99.5240167,106.288736 100.049406,105.952937 100.320937,105.457004 C100.512669,105.919197 100.619247,106.426912 100.619247,106.959264 C100.619247,109.121339 98.8663431,110.874243 96.7037322,110.874243 C94.5416569,110.874243 92.787682,109.121339 92.787682,106.959264 C92.787682,104.796117 94.5416569,103.042678 96.7037322,103.042678"
                                                fill="#364548"></path>
                                            <path
                                                d="M0,90.1623431 L254.327431,90.1623431 C248.78969,88.7575565 236.806427,86.8600502 238.782661,79.6026109 C228.713506,91.2543598 204.429925,87.7769372 198.301456,82.0313975 C191.476753,91.9297071 151.746946,88.167364 148.975933,80.4563013 C140.420285,90.4970711 113.908753,90.4970711 105.352569,80.4563013 C102.580485,88.167364 62.8512134,91.9297071 56.0259749,82.0313975 C49.8975063,87.7769372 25.6160669,91.2543598 15.545841,79.6026109 C17.5220753,86.8600502 5.53881172,88.7575565 0,90.1623431"
                                                fill="#364548"></path>
                                            <path
                                                d="M111.237356,140.889975 C97.6977406,134.464803 90.2657071,125.730812 86.1306109,116.195615 C81.1016569,117.631464 75.0556653,118.548887 68.0311967,118.943063 C65.3849707,119.091414 62.6016402,119.167464 59.6801339,119.167464 C56.3125021,119.167464 52.7638494,119.067849 49.0384603,118.870226 C61.4549958,131.279264 76.7303766,140.833741 105.013556,141.008335 C107.101724,141.008335 109.174895,140.967632 111.237356,140.889975"
                                                fill="#BDD9D7"></path>
                                            <path
                                                d="M91.1601004,124.993874 C89.2866946,122.451013 87.469523,119.255297 86.1338243,116.194544 C81.1037992,117.630929 75.0567364,118.548887 68.0311967,118.943063 C72.856636,121.56251 79.7584603,123.98969 91.1601004,124.993874"
                                                fill="#D3ECEC"></path>
                                        </g>
                                    </svg>
                                </div>
                                <v-card-title class="text-h4 font-weight-black text-wrap fade-in">Docker</v-card-title>
                                <v-card-text
                                    class="text-subtitle-1 font-weight-black fade-in docker-gradient-text gradient-text">
                                    Docker is an open platform for developing, shipping, and running applications.
                                    Docker enables you to separate your applications from your infrastructure so you can
                                    deliver software quickly. With Docker, you can manage your infrastructure in the
                                    same ways you manage your applications. By taking advantage of Docker's
                                    methodologies for shipping, testing, and deploying code, you can significantly
                                    reduce the delay between writing code and running it in production.
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-container>
                </v-col>
            </v-row>
        </BaseComponent>

        <v-sheet id="educations" min-height="100vh" class="cursor-default">
            <v-card flat width="100vw" min-width="100vw" min-height="100vh"
                class="d-flex flex-column align-center rounded-0 text-black">
                <div style="width: 100vw; min-height: 10vh;" class="d-flex educations-container">
                    <v-container style="max-width: 1280px; min-height: 10vh;">
                        <v-row>
                            <v-col class="d-flex justify-center">
                                <h3 class="underline-shorter mt-16 text-h3 text-center font-weight-bold">
                                    Academic Background
                                </h3>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <div style="width: 100vw; min-height: 90vh;" class="d-flex educations-container-gradient">
                    <v-container style="max-width: 1280px; min-height: 90vh;">
                        <v-row>
                            <v-col cols="12" sm="6" class="d-flex justify-start align-end">
                                <v-card flat class="bg-transparent">
                                    <v-card-title class="text-h4 text-start text-wrap">
                                        Department of Computer Science and Information Engineering
                                    </v-card-title>
                                    <v-card-subtitle class="text-subtitle-1 text-start text-wrap">
                                        Postgraduate student
                                    </v-card-subtitle>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" class="d-flex justify-end align-end">
                                <v-card flat class="bg-transparent">
                                    <v-card-title class="text-subtitle-1 text-end text-wrap text-grey">
                                        National Taiwan University of Science and Technology
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-container fluid>
                                    <v-card color="transparent">
                                        <v-card-title class="text-h5">
                                            Introduction
                                        </v-card-title>
                                        <v-card-text class="text-subtitle-1">
                                            The graduate program of the Department of Computer Science and Information
                                            Engineering was established on August 1, 1999. The founding faculty members
                                            came from departments such as Electronic Engineering, Electrical
                                            Engineering, and Information Management. Afterward, the undergraduate
                                            program of the our department was later established on August 2001, with
                                            both two-year and four-year undergraduate programs, and the department
                                            became one of the members of the College of Electrical Engineering and
                                            Computer Science. Since 2001, besides regular Master and Ph.D. programs, the
                                            graduate program starts offering part-time Master program in order to reach
                                            more tightly connection between the academic and the industry and to provide
                                            a talent nurturing environment for the industry.
                                        </v-card-text>
                                    </v-card>
                                </v-container>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6" class="d-flex justify-start align-end">
                                <v-card flat class="bg-transparent">
                                    <v-card-title class="text-h4 text-start text-wrap">
                                        Department of Information Management
                                    </v-card-title>
                                    <v-card-subtitle class="text-subtitle-1 text-start text-wrap">
                                        Bachelor's degree
                                    </v-card-subtitle>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" class="d-flex justify-end align-end">
                                <v-card flat class="bg-transparent">
                                    <v-card-title class="text-subtitle-1 text-end text-wrap text-grey">
                                        National Taiwan University of Science and Technology
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-container fluid>
                                    <v-card color="transparent">
                                        <v-card-title class="text-h5">
                                            Introduction
                                        </v-card-title>
                                        <v-card-text class="text-subtitle-1">
                                            The Department of Information Management of National Taiwan University of
                                            Science and Technology was established in 1978, and it has been more than 20
                                            years. In order to provide advanced research and development of information
                                            management theory and technology, the Institute of Information Management
                                            was established in 1988 to establish a master's and doctoral class. Starting
                                            from the second academic year, an EMBA asset management on-the-job master
                                            class will be established. The university part of the department is a
                                            two-year system. The four-year system recruits graduates from higher
                                            vocational colleges, and the two-year system recruits graduates from related
                                            disciplines such as the second and fifth colleges, so as to connect the
                                            curriculum teaching of higher vocational and junior colleges to ensure
                                            consistency and integrity. Course arrangement, and in-depth study of the
                                            theory and technology of information management, in order to become the
                                            information management technical personnel required by industrial and
                                            commercial enterprises. In addition, in the research institute of the
                                            department, the master class is divided into three admission channels:
                                            screening admission, general admission, and on-the-job special class,
                                            providing students with different learning paths, enabling postgraduates to
                                            do more in-depth study and research, so as to cultivate higher education The
                                            purpose of information management talents. Since the 1996 academic year, in
                                            response to the decrease in the number of junior college students, the
                                            two-year system has been suspended, and its posts have been transferred to
                                            postgraduate posts.
                                        </v-card-text>
                                    </v-card>
                                </v-container>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6" class="d-flex justify-start align-end">
                                <v-card flat class="bg-transparent">
                                    <v-card-title class="text-h4 text-start text-wrap">
                                        Arts and Commerce
                                    </v-card-title>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" class="d-flex justify-end align-end">
                                <v-card flat class="bg-transparent">
                                    <v-card-title class="text-subtitle-1 text-end text-wrap text-grey">
                                        Foon Yew High School
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-container fluid>
                                    <v-card color="transparent">
                                        <v-card-title class="text-h5">
                                            Introduction
                                        </v-card-title>
                                        <v-card-text class="text-subtitle-1">
                                            Foon Yew High School is the largest Chinese independent high school in
                                            Malaysia in terms of both students and campus size, and is also the largest
                                            Chinese secondary school outside of Mainland China and Taiwan, with the
                                            largest number of teachers and students. The main school, with its 13-acre
                                            (53,000 m2) campus, is located in Stulang Laut, Johor Bahru, the
                                            school's Kulai branch, with its 30-acre (120,000 m2) campus, is located in
                                            Taman Indahpura, Kulai, and another branch in Masai, with its 23.2-acre
                                            (94,000 m2) campus, is located in Bandar Seri Alam, Masai.
                                        </v-card-text>
                                    </v-card>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </v-card>
        </v-sheet>

        <v-fab @click="handleScrollTo()" class="me-4" icon="mdi-arrow-up" location="top end" absolute offset></v-fab>
    </v-main>
</template>

<script>
import BaseComponent from "@/components/BaseComponent.vue"
import { useDisplay, useTheme } from "vuetify"

export default {
    setup() {
        const { lgAndUp, mdAndUp, mdAndDown, smAndDown, smAndUp } = useDisplay()
        const theme = useTheme()
        function toggleTheme() {
            theme.global.name.value = theme.global.current.value.dark ? 'light' : 'custom'
        }

        return {
            lgAndUp,
            mdAndUp,
            mdAndDown,
            smAndDown,
            smAndUp,
            toggleTheme,
        }
    },
    components: {
        BaseComponent,
    },
    data() {
        return {
            ntnuBannerScale: 1.5,
            innerHeight: window.innerHeight,
            isLightTheme: false,
            homeMenu: false,
            drawer: false,
            scale: 1,
            videoPadding: 0,
            isVideoPlaying: false,
            myToolkitChip: ["Docker", "Git", "Linux", "Nginx", "Vite", "Webpack", "PHP", "Java", "Python", "C#", "JavaScript", "CSS", "HTML", "SQL", "Laravel", "PHP Unit", "Vue", "Vuetify", "jQuery", "ChartJS", "Ajax", "RWD", "Google Apps Script", "HCL Domino/Notes/Volt"]
        }
    },
    watch: {
        '$vuetify.theme.current.dark': function (val) {
            this.changeEducationsBackground()
            document.querySelectorAll(".underline-shorter").forEach((element) => {
                if (val) {
                    element.classList.remove("underline-shorter-light")
                } else {
                    element.classList.add("underline-shorter-light")
                }
            })
        }
    },
    methods: {
        changeEducationsBackground() {
            document.querySelectorAll(".educations-container").forEach((element) => {
                if (this.$vuetify.theme.current.dark) {
                    if (element.classList.contains("educations-container-light")) {
                        element.classList.remove("educations-container-light")
                    }
                    element.classList.add("educations-container-dark")
                } else {
                    if (element.classList.contains("educations-container-dark")) {
                        element.classList.remove("educations-container-dark")
                    }
                    element.classList.add("educations-container-light")
                }
            })
            document.querySelectorAll(".educations-container-gradient").forEach((element) => {
                if (this.$vuetify.theme.current.dark) {
                    if (element.classList.contains("educations-container-gradient-light")) {
                        element.classList.remove("educations-container-gradient-light")
                    }
                    element.classList.add("educations-container-gradient-dark")
                } else {
                    if (element.classList.contains("educations-container-gradient-dark")) {
                        element.classList.remove("educations-container-gradient-dark")
                    }
                    element.classList.add("educations-container-gradient-light")
                }
            })
        },
        async handleScroll() {
            this.scale = Math.min(1 + window.scrollY * 0.0006, 1.4)
            const ntnuBanner = document.getElementById("ntnu-banner")

            if (ntnuBanner && ntnuBanner.getBoundingClientRect().top < window.innerHeight) {
                this.ntnuBannerScale = Math.min(Math.max((ntnuBanner.getBoundingClientRect().top + ntnuBanner.clientHeight + 64) / window.innerHeight * 1.8, 1), 1.5)
            }

            const elements = document.querySelectorAll(".fade-in")
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                const position = element.getBoundingClientRect()

                if (position.top < window.innerHeight && position.bottom >= 0) {
                    if (!element.classList.contains("fade-in-active")) {
                        await new Promise((resolve) => setTimeout(resolve, 20))
                        element.classList.add("fade-in-active")
                    }
                } else {
                    element.classList.remove("fade-in-active")
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
                let targetEl = document.querySelector(`#${target}`)
                window.scrollTo({
                    top: target === 'about-me' ? targetEl.offsetTop : targetEl.offsetTop - 64,
                    behavior: "smooth",
                })
            }
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll)
        this.changeEducationsBackground()
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    },
}
</script>

<style lang="scss" scoped>
.educations-container-dark {
    background-image: linear-gradient(180deg, #FFF0E5 100%, #EDF6FC 0%);
}

.educations-container-gradient-dark {
    background-image: linear-gradient(180deg, #FFEEDE -20%, white 75%) !important;
}

.educations-container-light {
    background-image: linear-gradient(180deg, #EDF6FC 100%, #FFF0E5 0%);
}

.educations-container-gradient-light {
    background-image: linear-gradient(180deg, #EDF6FC -20%, white 75%) !important;
}

.gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    color: transparent;
}

.jquery-gradient-text {
    background-image: -webkit-linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
    background-image: -moz-linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
    background-image: linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
}

.nginx-gradient-text {
    background-image: -webkit-radial-gradient(circle farthest-corner at 10% 20%, rgba(14, 174, 87, 1) 0%, rgba(12, 116, 117, 1) 90%);
    background-image: -moz-radial-gradient(circle farthest-corner at 10% 20%, rgba(14, 174, 87, 1) 0%, rgba(12, 116, 117, 1) 90%);
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(14, 174, 87, 1) 0%, rgba(12, 116, 117, 1) 90%);
}

.chartjs-gradient-text {
    background-image: -webkit-linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    background-image: -moz-linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
}

.vuetify-gradient-text {
    background-image: -webkit-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    background-image: -moz-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.vue-gradient-text {
    background-image: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-image: -moz-linear-gradient(315deg, #42d392 25%, #647eff);
    background-image: linear-gradient(315deg, #42d392 25%, #647eff);
}

.docker-gradient-text {
    background-image: -webkit-linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
    background-image: -moz-linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
    background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
}

.git-gradient-text {
    background-image: -webkit-linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
    background-image: -moz-linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
    background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
}

.linux-gradient-text {
    background-image: -webkit-linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), -webkit-radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), -webkit-radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
    background-image: -moz-linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), -moz-radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), -moz-radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
    background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
    background-blend-mode: normal, lighten, soft-light;
}

.php-gradient-text {
    background-image: -webkit-linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    background-image: -moz-linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}

.laravel-gradient-text {
    background-image: -webkit-linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    background-image: -moz-linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.video-container {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewport="0 0 24 24" style="fill:black;"><circle cx="12" cy="12" r="8" stroke="white" stroke-width="3" fill="white" /></svg>'), auto;
}

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
    border-radius: 50px;
    background-color: #f48fb1;
}

.underline-shorter-light::after {
    background-color: rgb(24, 103, 192);
}

.floating {
    animation: float 6s ease-in-out infinite;
}

.floating-wihtout-shadow {
    animation: floatWithoutShadow 3s ease-in-out infinite;
}

.fade-in {
    opacity: 0;
    transform: translateY(-32px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-in-active {
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
