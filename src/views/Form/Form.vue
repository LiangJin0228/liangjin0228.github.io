<template>
    <v-overlay v-model="loading" class="d-flex justify-center align-center loading-overlay"
        style="background-color: #1d2630">
        <LoadingNode />
    </v-overlay>
    <v-app-bar app v-if="floatTitle.show" height="fit-content">
        <v-app-bar-title class="ma-0 pa-5 pb-1">
            <span :class="{ 'text-wrap': floatTitle.expand }">{{ floatTitle.content }}</span> <br>

            <v-btn block @click="floatTitle.expand = !floatTitle.expand">
                <v-icon>
                    {{ floatTitle.expand ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
            </v-btn>
        </v-app-bar-title>
    </v-app-bar>

    <v-card v-if="form" flat :max-width="width >= 1440 ? '1280' : '720'" class="ma-auto">
        <!-- <v-progress-linear height="10" color="orange" :model-value="progress" stream></v-progress-linear> -->

        <template v-if="page == 1">
            <v-card-title fluid class="text-wrap pb-0 text-h4"> {{ form.title }} </v-card-title>
            <v-card-text fluid> {{ form.description }} </v-card-text>
        </template>

        <v-container fluid class="pt-0" id="listWithHandle">
            <Node class="my-5 fixed-title" v-for="node in form.nodes" :key="node.id"
                :prependOrderNumber="node.prependOrderNumber" :validateFormTimes="validateFormTimes" :node="node" />
        </v-container>

        <v-card-actions>
            <v-container fluid class="d-flex justify-end">
                <!-- <v-btn color="primary" size="large" variant="elevated" @click="checkAnswer"> {{ nextOrSubmit }} </v-btn> -->
            </v-container>
        </v-card-actions>
    </v-card>

    <v-card v-else rounded="xl" variant="tonal">
        <v-card-title class="text-center text-h1 text-red">查無此問卷!</v-card-title>
    </v-card>

    <v-snackbar v-model="snackbar.show" timer="orange" multi-line>
        {{ snackbar.text }}
        <template #actions>
            <v-btn color="red" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { useDisplay } from "vuetify";
import fakedata from "./fakeData";
// import axios from "axios";
// import Sortable, { AutoScroll } from "sortablejs/modular/sortable.core.esm.js";
import LoadingNode from "../Loading.vue";
import Node from "./Node.vue";

export default {
    setup() {
        const { width } = useDisplay();
        return { width };
    },
    components: {
        Node,
        LoadingNode,
    },
    data() {
        return {
            floatTitle: {
                content: "",
                show: false,
                expand: false,
            },
            snackbar: {
                text: "",
                show: false,
            },
            loading: true,
            validateFormTimes: 0,
            correctAnswerInCurrentPage: [[]],
            answersInCurrentPage: [[]],
            page: 1,
            form: null,
        };
    },
    computed: {
        // progress() {
        //     return (this.page / this.totalPages) * 100;
        // },
        // nextOrSubmit() {
        //     return this.page === this.totalPages ? "提交" : "下一頁";
        // },
        // totalPages() {
        //     return this.form.pages.length;
        // },
        // nodesInCurrentPage() {
        //     return this.form.nodes.filter((node) =>
        //         this.form.pages[this.page - 1].includes(node.id)
        //     );
        // },
        // countOfNodesInCurrentPage() {
        //     function recursiveCalculate(arr) {
        //         return arr.reduce((count, node) => {
        //             return (
        //                 count +
        //                 (node.rules.is_required ? 1 : 0) +
        //                 (node.rules.is_required && node.nodes
        //                     ? recursiveCalculate(node.nodes)
        //                     : 0)
        //             );
        //         }, 0);
        //     }
        //     return recursiveCalculate(this.nodesInCurrentPage);
        // },
    },
    methods: {
        // async init() {
        //     await this.initForm();
        //     await new Promise((r) => setTimeout(r, 1000));
        //     await this.initSortable();
        //     this.loading = false;
        // },
        // async initForm() {
        //     this.loading = true;
        //     const response = await axios.get("/fakeData");
        //     this.form = response.data.form;
        //     await this.bubbleSort(this.form.nodes);
        // },
        // async initSortable() {
        //     Sortable.mount(new AutoScroll());
        //     Sortable.create(listWithHandle, {
        //         handle: ".handleMove",
        //         animation: 150,
        //     });
        // },
        // async bubbleSort(arr) {
        //     let i, j, temp;
        //     for (i = 0; i < arr.length; i++) {
        //         if (arr[i].nodes) {
        //             await this.bubbleSort(arr[i].nodes);
        //         }
        //         for (j = i + 1; j < arr.length; j++) {
        //             if (arr[i].order_number > arr[j].order_number) {
        //                 temp = await arr[i];
        //                 arr[i] = await arr[j];
        //                 arr[j] = await temp;
        //             }
        //         }
        //     }

        //     return arr;
        // },
        // async handleAnswerValidated(event) {
        //     const correctIndex = event.validateFormTimes - 1;
        //     this.correctAnswerInCurrentPage[correctIndex] =
        //         this.correctAnswerInCurrentPage[correctIndex] ?? [];

        //     const index = this.correctAnswerInCurrentPage[
        //         correctIndex
        //     ].findIndex((item) => item.node === event.node);

        //     index === -1
        //         ? this.correctAnswerInCurrentPage[correctIndex].push(event)
        //         : (this.correctAnswerInCurrentPage[correctIndex][index] =
        //             event);
        //     if (
        //         this.answersInCurrentPage[this.page - 1].length ===
        //         this.countOfNodesInCurrentPage &&
        //         this.correctAnswerInCurrentPage[correctIndex].length ===
        //         this.countOfNodesInCurrentPage
        //     ) {
        //         await axios
        //             .post("saveData", this.answersInCurrentPage[this.page - 1])
        //             .then((response) => {
        //                 this.snackbar.text = `第${this.page}頁的答案都已成功儲存!`;
        //                 this.snackbar.show = true;
        //             });
        //         this.page++;
        //         this.validateFormTimes = 0;
        //         this.answersInCurrentPage[this.page - 1] = [];
        //         window.scrollTo({
        //             top: 0,
        //             left: 0,
        //             behavior: "smooth",
        //         });
        //     }
        // },
        // handleAnswerChanged(event) {
        //     const index = this.answersInCurrentPage[this.page - 1].findIndex(
        //         (item) => item.node.id === event.node.id
        //     );

        //     if (index !== -1) {
        //         if (event.answer.length === 0) {
        //             this.answersInCurrentPage[this.page - 1].splice(index, 1);
        //         } else {
        //             this.answersInCurrentPage[this.page - 1][index] = event;
        //         }
        //     } else {
        //         this.answersInCurrentPage[this.page - 1].push(event);
        //     }
        // },
        // checkAnswer() {
        //     this.validateFormTimes++;
        // },
    },
    created() {
        // this.init();
    },
    async mounted() {
        this.form = fakedata.form;
        await new Promise((r) => setTimeout(r, 1000));
        this.loading = false;
        // axios.get("/fakeData").then((response) => {
        //     this.loading = false;
        //     this.form = response.data.form;
        // });
        if (this.width) {
            let lastKnownScrollPosition = 0;
            let fixedCards = document.querySelectorAll(".fixed-title");
            let firstCard = fixedCards[0];

            document.addEventListener("scroll", () => {
                lastKnownScrollPosition = window.scrollY;
                fixedCards.forEach((card) => {
                    let cardBottom = card.offsetTop + card.offsetHeight;
                    let content = card.children[1].innerHTML;
                    if (card.offsetHeight > 800 && card.offsetTop <= lastKnownScrollPosition && lastKnownScrollPosition <= cardBottom - 200) {
                        this.floatTitle.content = content;
                        this.floatTitle.show = true;
                    } else if (lastKnownScrollPosition > cardBottom - 200) {
                        this.floatTitle.show = false;
                    }
                });
                if (lastKnownScrollPosition < firstCard.offsetTop) {
                    this.floatTitle.show = false;
                }
            });
        }
    },
};
</script>

<style>
/* .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
} */

/* ::-webkit-scrollbar {
    width: 0;
    height: 0;
} */
</style>
