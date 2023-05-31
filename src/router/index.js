// Imports
import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import authenticate from "@/auth/authenticate";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash };
        if (savedPosition) return savedPosition;
        return { x: 0, y: 0 };
    },
    routes: [{
            path: "/",
            component: () =>
                import ("@/views/app/Index"),
            beforeEnter: authenticate,
            redirect: "/app/dashboard/entrenamiento",

            children: [{
                    path: "/app/dashboard",
                    beforeEnter: authenticate,
                    component: () =>
                        import ("@/views/app/dashboard/Index"),

                    children: [{
                            path: "cobranza",
                            beforeEnter: authenticate,
                            name: "sales",
                            component: () =>
                                import ("@/views/app/dashboard/Sales"),
                        },
                        {
                            path: "eventos",
                            beforeEnter: authenticate,
                            name: "job-management",
                            meta: {
                                breadcrumb: [{ name: "Dashboard" }, { name: "Job Management" }],
                            },
                            component: () =>
                                import ("@/views/app/dashboard/JobManagement"),
                        },
                        {
                            path: "analytic-extra",
                            beforeEnter: authenticate,
                            component: () =>
                                import ("@/views/app/dashboard/AnalyticExtra"),
                        },
                        {
                            path: "entrenamiento",
                            name: "entrenamiento",
                            beforeEnter: authenticate,
                            meta: {
                                breadcrumb: [{ name: "Dashboard" }, { name: "Entrenamiento" }],
                            },
                            component: () =>
                                import ("@/views/app/dashboard/Entrenamiento"),
                        },
                        {
                            path: "analisis",
                            name: "learning-management",
                            beforeEnter: authenticate,
                            component: () =>
                                import ("@/views/app/dashboard/LearningManagement"),
                            meta: {
                                breadcrumb: [
                                    { name: "Dashboard" },
                                    { name: "Learning Management" },
                                ],
                            },
                        },
                        {
                            path: "blog",
                            name: "crypto-currency",
                            beforeEnter: authenticate,
                            meta: {
                                breadcrumb: [
                                    { name: "Dashboard" },
                                    { name: "crypto-currency" },
                                ],
                            },
                            component: () =>
                                import ("@/views/app/dashboard/CryptoCurrency"),
                        },
                        {
                            path: "notas",
                            name: "donation",
                            beforeEnter: authenticate,
                            meta: {
                                breadcrumb: [{ name: "Dashboard" }, { name: "Donation" }],
                            },
                            component: () =>
                                import ("@/views/app/dashboard/Donation"),
                        },
                    ],
                },

            ],
        },
        {
            path: "/app/sessions",
            component: () =>
                import ("@/views/app/sessions/Sessions"),

            children: [

                {
                    path: "error",
                    name: "error",
                    component: () =>
                        import ("@/views/app/sessions/Error"),
                    meta: { requiresAuth: false, validar: false }
                },
                {
                    path: "forgot",
                    name: "forgot",
                    component: () =>
                        import ("@/views/app/sessions/Forgot"),
                    meta: { requiresAuth: false, validar: false }
                },
                {
                    path: "lockscreen",
                    name: "lockscreen",
                    component: () =>
                        import ("@/views/app/sessions/Lockscreen"),
                    meta: { requiresAuth: false, validar: false }
                },
                {
                    path: "sign-in-two",
                    name: "sign-in-two",
                    component: () =>
                        import ("@/views/app/sessions/SignInTwo"),
                    meta: { requiresAuth: false, validar: false }
                },

                {
                    path: "sign-up-2",
                    name: "sign-up-2",
                    component: () =>
                        import ("@/views/app/sessions/SignUpTwo"),
                    meta: { requiresAuth: false, validar: false }
                },
                {
                    path: "RecursoNoDisponible",
                    name: "RecursoNoDisponible",
                    component: () =>
                        import ("@/views/app/sessions/RecursoNoDisponible"),
                    meta: { requiresAuth: false, validar: false }
                },

            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    // If this isn't an initial page load.
    if (to.path) {
        // Start the route progress bar.
        store.dispatch("changeThemeLoadingState", true);
    }
    next();
});

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    // setTimeout(() => store.dispatch('changeThemeLoadingState', false), 500);
    store.dispatch("changeThemeLoadingState", false);
});

export default router;