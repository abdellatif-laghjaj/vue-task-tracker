import {createRouter, createWebHistory} from "vue-router";

import About from "@/views/About";

const routes = [
    {
        path: "/about",
        name: "about",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
