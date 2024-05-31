<template>
    <LoadingNode :loading="loading" />

    <v-app-bar app v-if="fixedTitle.show" height="fit-content">
        <v-app-bar-title class="ma-0 pa-5 pb-1">
            <span :class="{ 'text-wrap': fixedTitle.expand }">
                {{ fixedTitle.content }}
            </span>
            <br />
            <v-btn block rounded class="ma-auto" @click="fixedTitle.expand = !fixedTitle.expand">
                <v-icon>
                    {{ fixedTitle.expand ? "mdi-chevron-up" : "mdi-chevron-down" }}
                </v-icon>
            </v-btn>
        </v-app-bar-title>
    </v-app-bar>

    <v-card v-if="form" flat :max-width="width >= 1440 ? '1280' : '720'" class="ma-auto pa-3">
        <!-- <v-progress-linear height="10" color="orange" :model-value="progress" stream></v-progress-linear> -->

        <template v-if="page == 1">
            <v-card-title fluid class="text-wrap pb-0 text-h4">
                {{ form.title }}
            </v-card-title>
            <v-card-text fluid> {{ form.description }} </v-card-text>
        </template>

        <v-container fluid class="ma-0 px-0 d-flex flex-column">
            <Node v-for="node in form.nodes" :key="node.id" class="fixed-title" :class="`order-${node.order_number}`"
                ref="formNodes" :node="node" />
        </v-container>

        <v-card-actions class="mb-5 d-flex justify-end">
            <v-btn color="primary" size="large" variant="elevated" @click="submit">
                提交
            </v-btn>
        </v-card-actions>
    </v-card>

    <v-card v-else rounded="xl" variant="tonal">
        <v-card-title class="text-center text-h1 text-red">查無此問卷!</v-card-title>
    </v-card>

    <v-snackbar v-model="snackbar.show" :timer="snackbar.status === 200 ? 'green' : 'red'" multi-line>
        {{ snackbar.text }}
        <template #actions>
            <v-btn color="red" variant="text" @click="snackbar.show = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
// import axios from "axios";
import { useDisplay } from "vuetify";
import fakedata from "./fakeData";
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
            fixedTitle: {
                content: "",
                show: false,
                expand: false,
            },
            snackbar: {
                status: 0,
                text: "",
                show: false,
            },
            loading: true,
            page: 1,
            form: null,
        };
    },
    computed: {},
    methods: {
        async submit() {
            let validationPassed = true;

            for (const index in this.$refs.formNodes) {
                const formNode = this.$refs.formNodes[index];
                const valid = await formNode.$refs.node.$refs.form.validate();

                if (!valid.valid) {
                    validationPassed = false;
                    formNode.$refs.node.$data.panels = [];
                    alert(`第${formNode.node.order_number}題填答值有誤，請重新填寫！`);
                    window.scrollTo({
                        left: 0,
                        top: formNode.$el.offsetTop - 64,
                        behavior: "smooth",
                    });
                    break;
                }
            }

            if (validationPassed) {
                // Perform your request here
                alert('All forms are valid. Proceed with the request.');
            }
        },
    },
    async mounted() {
        // await axios.get("/fakeData").then((response) => {
        //     this.form = response.data.form;
        //     this.loading = false;
        // });
        this.form = fakedata.form;
        await new Promise((r) => setTimeout(r, 1000));
        this.loading = false;

        if (this.width <= 1440) {
            let lastKnownScrollPosition = 0;
            let fixedCards = document.querySelectorAll(".fixed-title");
            let firstCard = fixedCards[0];

            document.addEventListener("scroll", () => {
                lastKnownScrollPosition = window.scrollY;
                fixedCards.forEach((card) => {
                    let cardBottom = card.offsetTop + card.offsetHeight;
                    let content = card.children[1].innerHTML;
                    if (
                        card.offsetHeight > 800 &&
                        card.offsetTop <= lastKnownScrollPosition &&
                        lastKnownScrollPosition <= cardBottom - 200
                    ) {
                        this.fixedTitle.content = content;
                        this.fixedTitle.show = true;
                    } else if (lastKnownScrollPosition > cardBottom - 200) {
                        this.fixedTitle.show = false;
                    }
                });
                if (lastKnownScrollPosition < firstCard.offsetTop) {
                    this.fixedTitle.show = false;
                }
            });
        }
    },
};
</script>
