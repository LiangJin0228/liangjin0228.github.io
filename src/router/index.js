import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/form",
    },
    // {
    //     path: "/index",
    //     component: () => import("@/layouts/DefaultLayout.vue"),
    //     children: [
    //         {
    //             path: "",
    //             name: "Home",
    //             component: () =>
    //                 import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    //         },
    //     ],
    // },
    // {
    //     path: "/resume",
    //     component: () => import("@/layouts/DefaultLayout.vue"),
    //     children: [
    //         {
    //             path: "",
    //             name: "Resume",
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "resume" */ "@/views/Resume.vue"
    //                 ),
    //         },
    //     ],
    // },
    // {
    //     path: "/about",
    //     component: () => import("@/layouts/DefaultLayout.vue"),
    //     children: [
    //         {
    //             path: "",
    //             name: "About",

    //             component: () =>
    //                 import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    //         },
    //     ],
    // },
    // {
    //     path: "/contact",
    //     component: () => import("@/layouts/DefaultLayout.vue"),
    //     children: [
    //         {
    //             path: "",
    //             name: "Contact",
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "contact" */ "@/views/Contact.vue"
    //                 ),
    //         },
    //     ],
    // },
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
