import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/form",
    },
    {
        path: "/form",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "Form",
                component: () =>
                    import(
                        /* webpackChunkName: "form" */ "@/views/Form/Form.vue"
                    ),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
