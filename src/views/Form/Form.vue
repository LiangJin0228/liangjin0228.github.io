<template>
    <LoadingNode :loading="loading" />

    <v-app-bar app v-if="fixedTitle.show" height="fit-content">
        <v-app-bar-title id="fixedTitle" class="ma-0 pa-3 pb-1">
            <span v-html="fixedTitle.content" :class="{ 'text-wrap': fixedTitle.expand }"></span>
            <br />
            <v-btn block rounded class="ma-auto" @click="fixedTitle.expand = !fixedTitle.expand">
                <v-icon>
                    {{
                        fixedTitle.expand
                            ? "mdi-chevron-up"
                            : "mdi-chevron-down"
                    }}
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
            <template v-for="node in form.nodes" :key="node.id">
                <Node v-if="form.pages[page - 1].includes(node.id)" class="fixed-title"
                    :class="`order-${node.order_number}`" ref="node" :node="node" @skipNode="handleSkipNode"
                    @rollBackNode="handleRollBackNode" />
                <!-- <Node class="fixed-title" :class="`order-${node.order_number}`" ref="node" :node="node" /> -->
            </template>
        </v-container>

        <v-card-actions class="mb-5 d-flex justify-end">
            <v-btn color="primary" size="large" variant="elevated" @click="submit">
                {{ nextOrSubmit }}
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
import LoadingNode from "./Loading.vue";
import Node from "./Node.vue";
import fakedata from "./fakeData";

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
    computed: {
        nextOrSubmit() {
            return this.page === this.form.pages.length ? "提交" : "下一頁";
        },
    },
    methods: {
        handleRollBackNode(targets) {
            targets.forEach((target) => {
                const t = this.form.nodes.find((node) => node.id === target);
                t.isSkipped = false;
            });
        },
        handleSkipNode(target) {
            const t = this.form.nodes.find((node) => node.id === target);
            t.isSkipped = true
        },
        getElementAbsPos(element) {
            let top = element.offsetTop;
            while ((element = element.offsetParent)) {
                top += element.offsetTop;
            }
            return { left: 0, top: top - 128, behavior: "smooth" };
        },
        async recursivelyValidate(node) {
            if (node.$refs.node) {
                for (const index in node.$refs.node) {
                    const valid = await this.recursivelyValidate(
                        node.$refs.node[index].$refs.node
                    );
                    if (!valid) return valid;
                }
                return true;
            } else {
                if (node.$refs.form) {
                    const valid = await node.$refs.form.validate();
                    if (!valid.valid) {
                        alert(
                            `第${node.$props.node.order_number}題填答值有誤,請重新填寫！`
                        );
                        window.scrollTo(this.getElementAbsPos(node.$el));
                        return false;
                    }
                }
                return true;
            }
        },
        async submit() {
            let validationPassed = true;

            for (const index in this.$refs.node) {
                const node = this.$refs.node[index].$refs.node;
                validationPassed = await this.recursivelyValidate(node);

                if (!validationPassed) break;
            }

            if (validationPassed) {
                if (this.page === this.form.pages.length) {
                    this.submitRequest();
                } else {
                    this.page++;
                    this.snackbar = {
                        status: 200,
                        text: `第${this.page - 1}頁的答案已經順利提交，跳到下一頁！`,
                        show: true,
                    };
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
                }
            }
        },
        async submitRequest() {
            // await axios.post("/submit", this.form).then((response) => {
            //     this.snackbar.status = response.status;
            //     this.snackbar.text = response.data.message;
            //     this.snackbar.show = true;
            // });
            this.snackbar = {
                status: 200,
                text: "提交成功",
                show: true,
            };
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
            document.addEventListener("scroll", () => {
                let lastKnownScrollPosition = window.scrollY;
                let fixedCards = document.querySelectorAll(".fixed-title");
                let firstCard = fixedCards[0];

                fixedCards.forEach((card) => {
                    let childNodesHeight = Array.from(
                        card.querySelectorAll(".v-container .sub-node")
                    ).reduce((total, node) => total + node.offsetHeight, 0);

                    const cardPos = this.getElementAbsPos(card);
                    let cardBottom = cardPos.top + card.offsetHeight;
                    let content = card.children[1].innerHTML;
                    let isWithinCard =
                        cardPos.top + 64 <= lastKnownScrollPosition &&
                        lastKnownScrollPosition <= cardBottom - 200;

                    if (
                        card.offsetHeight - childNodesHeight > 800 &&
                        isWithinCard
                    ) {
                        this.fixedTitle = {
                            content: content,
                            show: true,
                            expand: true,
                        };
                    } else if (lastKnownScrollPosition > cardBottom - 200) {
                        this.fixedTitle = {
                            content: "",
                            show: false,
                            expand: false,
                        };
                    }
                });

                if (lastKnownScrollPosition < firstCard.offsetTop) {
                    this.fixedTitle = {
                        content: "",
                        show: false,
                        expand: false,
                    };
                }
            });
        }
    },
};
</script>
