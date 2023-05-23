/*
 * ============================
 * File: index.js
 * Project: Octavia-Admin
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://ui-lib.com/
 * -----
 * Last Modified: Saturday, 18th April 2020 9:32:52 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2021 UILIB, UILIB
 * ============================
 */

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
            import("@/views/app/Index"),
        beforeEnter: authenticate,
        redirect: "/app/dashboard/analytic",

        children: [
            // {
            //   path: "layout/:layout",
            //   component: () => import("@/views/app/Index")
            // },
            {
                path: "/app/dashboard",
                component: () =>
                    import("@/views/app/dashboard/Index"),

                children: [{
                    path: "sales",
                    name: "sales",
                    meta: {
                        breadcrumb: [{ name: "Dashboard" }, { name: "Sales" }],
                    },
                    component: () =>
                        import("@/views/app/dashboard/Sales"),
                },
                {
                    path: "job-management",
                    name: "job-management",
                    meta: {
                        breadcrumb: [{ name: "Dashboard" }, { name: "Job Management" }],
                    },
                    component: () =>
                        import("@/views/app/dashboard/JobManagement"),
                },
                {
                    path: "analytic-extra",
                    component: () =>
                        import("@/views/app/dashboard/AnalyticExtra"),
                },
                {
                    path: "analytic",
                    name: "analytic",
                    meta: {
                        breadcrumb: [{ name: "Dashboard" }, { name: "Analytic" }],
                    },
                    component: () =>
                        import("@/views/app/dashboard/Analytic"),
                },
                {
                    path: "learning-management",
                    name: "learning-management",
                    component: () =>
                        import("@/views/app/dashboard/LearningManagement"),
                    meta: {
                        breadcrumb: [
                            { name: "Dashboard" },
                            { name: "Learning Management" },
                        ],
                    },
                },
                {
                    path: "crypto-currency",
                    name: "crypto-currency",
                    meta: {
                        breadcrumb: [
                            { name: "Dashboard" },
                            { name: "crypto-currency" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/dashboard/CryptoCurrency"),
                },
                {
                    path: "donation",
                    name: "donation",
                    meta: {
                        breadcrumb: [{ name: "Dashboard" }, { name: "Donation" }],
                    },
                    component: () =>
                        import("@/views/app/dashboard/Donation"),
                },
                ],
            },
            {
                path: "/app/customTable",
                component: () =>
                    import("@/views/app/customTable/CustomTable"),
                children: [{
                    path: "tableOne",
                    name: "tableOne",
                    meta: {
                        breadcrumb: [{ name: "Customtable" }, { name: "Table One" }],
                    },
                    component: () =>
                        import("@/views/app/customTable/TableOne"),
                },
                {
                    path: "tableTwo",
                    name: "tableTwo",
                    meta: {
                        breadcrumb: [{ name: "Customtable" }, { name: "Table One" }],
                    },
                    component: () =>
                        import("@/views/app/customTable/TableTwo"),
                },
                {
                    path: "tableThree",
                    name: "tableThree",
                    meta: {
                        breadcrumb: [{ name: "Customtable" }, { name: "Table Three" }],
                    },
                    component: () =>
                        import("@/views/app/customTable/TableThree"),
                },
                ],
            },
            // sessions
            {
                path: "/app/apps",
                component: () =>
                    import("@/views/app/apps/Index"),
                children: [{
                    path: "chat",
                    name: "chat",
                    component: () =>
                        import("@/views/app/apps/Chat"),
                    meta: {
                        breadcrumb: [{ name: "Apps" }, { name: "Chat" }],
                    },
                },
                {
                    path: "file-manager",
                    name: "file-manager",
                    meta: {
                        breadcrumb: [{ name: "Apps" }, { name: "File Manager" }],
                    },
                    component: () =>
                        import("@/views/app/apps/FileManager"),
                },
                {
                    path: "note",
                    name: "note",
                    meta: {
                        breadcrumb: [{ name: "Apps" }, { name: "Note" }],
                    },
                    component: () =>
                        import("@/views/app/apps/Note"),
                },
                {
                    path: "scrumboard",
                    name: "scrumboard",
                    meta: {
                        breadcrumb: [{ name: "Apps" }, { name: "Scrumboard" }],
                    },
                    component: () =>
                        import("@/views/app/apps/Scrumboard"),
                },

                {
                    path: "todo",
                    name: "todo",
                    component: () =>
                        import("@/views/app/apps/Todo"),
                    meta: {
                        breadcrumb: [{ name: "Dashboard" }, { name: "todo" }],
                    },
                },
                ],
            },
            {
                path: "/app/ecommerce",
                component: () =>
                    import("@/views/app/ecommerce/Ecommerce"),
                children: [{
                    path: "ecommerce-product-list",
                    name: "ecommerce-product-list",
                    meta: {
                        breadcrumb: [{ name: "Ecommerce" }, { name: "Product List" }],
                    },
                    component: () =>
                        import("@/views/app/ecommerce/EcommerceProductList"),
                },
                {
                    path: "ecommerce-product-details",
                    name: "ecommerce-product-details",
                    meta: {
                        breadcrumb: [
                            { name: "Ecommerce" },
                            { name: "Product Details" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/ecommerce/EcommerceProductDetails"),
                },
                {
                    path: "ecommerce-product-checkout",
                    name: "ecommerce-product-checkout",
                    meta: {
                        breadcrumb: [
                            { name: "Ecommerce" },
                            { name: "Product Checkout" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/ecommerce/EcommerceProductCheckout"),
                },
                ],
            },
            {
                path: "/app/test",
                component: () =>
                    import("@/views/app/test/Test"),
                children: [{
                    path: "testing",
                    component: () =>
                        import("@/views/app/test/Testing"),
                },
                    // {
                    //   path: "testing-2",
                    //   component: () => import("@/views/app/test/Testing-2")
                    // },
                ],
            },
            {
                path: "/app/charts",
                component: () =>
                    import("@/views/app/charts/Index"),

                children: [{
                    path: "ApexAreaChart",
                    name: "ApexAreaChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexAreaChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexAreaChart"),
                },
                {
                    path: "ApexBarChart",
                    name: "ApexBarChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexBarChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexBarChart"),
                },
                {
                    path: "ApexLineChart",
                    name: "ApexLineChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexLineChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexLineChart"),
                },
                {
                    path: "ApexMixChart",
                    name: "ApexMixChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexMixChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexMixChart"),
                },
                {
                    path: "ApexColumnChart",
                    name: "ApexColumnChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexColumnChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexColumnChart"),
                },
                {
                    path: "ApexPieChart",
                    name: "ApexPieChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexPieChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexPieChart"),
                },
                {
                    path: "ApexRadarChart",
                    name: "ApexRadarChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexRadarChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexRadarChart"),
                },
                {
                    path: "ApexScatterChart",
                    name: "ApexScatterChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexScatterChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexScatterChart"),
                },
                {
                    path: "ApexSparklineChart",
                    name: "ApexSparklineChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "ApexSparklineChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/ApexSparklineChart"),
                },
                {
                    path: "CustomApexChart",
                    name: "CustomApexChart",
                    meta: {
                        breadcrumb: [
                            { name: "Charts" },
                            { name: "ApexCharts" },
                            { name: "CustomApexChart" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/charts/CustomApexChart"),
                },
                ],
            },
            {
                path: "/app/account",
                component: () =>
                    import("@/views/app/account/Index.vue"),
                children: [{
                    path: "AccountData",
                    name: "AccountData",
                    component: () =>
                        import("@/views/app/account/AccountData"),
                },
                {
                    path: "AccountHome",
                    name: "AccountHome",
                    component: () =>
                        import("@/views/app/account/AccountHome"),
                },
                {
                    path: "AccountPayment",
                    name: "AccountPayment",
                    component: () =>
                        import("@/views/app/account/AccountPayment"),
                },
                {
                    path: "AccountPeople",
                    name: "AccountPeople",
                    component: () =>
                        import("@/views/app/account/AccountPeople"),
                },
                {
                    path: "AccountPersonalInfo",
                    name: "AccountPersonalInfo",
                    component: () =>
                        import("@/views/app/account/AccountPersonalInfo"),
                },
                {
                    path: "AccountSecurity",
                    name: "AccountSecurity",
                    component: () =>
                        import("@/views/app/account/AccountSecurity"),
                },
                ],
            },
            {
                path: "/app/faq",
                component: () =>
                    import("@/views/app/faq/Faq.vue"),
                children: [{
                    path: "FaqOne",
                    name: "FaqOne",
                    component: () =>
                        import("@/views/app/faq/FaqOne"),
                },
                {
                    path: "FaqTwo",
                    name: "FaqTwo",
                    component: () =>
                        import("@/views/app/faq/FaqTwo"),
                },
                {
                    path: "FaqThree",
                    name: "FaqThree",
                    component: () =>
                        import("@/views/app/faq/FaqThree"),
                },
                ],
            },
            {
                path: "/app/widgets",
                component: () =>
                    import("@/views/app/widgets/Widgets"),
                children: [{
                    path: "general",
                    name: "general",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Widgets" },
                            { name: "general" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/widgets/General"),
                },
                {
                    path: "widgetsCharts",
                    name: "widgetsCharts",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Widgets" },
                            { name: "widgetsCharts" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/widgets/WidgetCharts"),
                },
                {
                    path: "widgetsTable",
                    name: "widgetsTable",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Widgets" },
                            { name: "widgetsTable" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/widgets/WidgetsTable"),
                },
                ],
            },
            {
                path: "/app/list",
                component: () =>
                    import("@/views/app/list/List"),
                children: [{
                    path: "list-column",
                    name: "list-column",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "List" },
                            { name: "List Column One" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/list/ListColumnOne"),
                },
                {
                    path: "list-column-two",
                    name: "list-column-two",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "List" },
                            { name: "List Column Two" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/list/ListColumnTwo"),
                },
                {
                    path: "list-column-three",
                    name: "list-column-three",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "List" },
                            { name: "List Column Three" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/list/ListColumnThree"),
                },
                {
                    path: "list-column-row",
                    name: "list-column-row",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "List" },
                            { name: "List Column Row" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/list/ListColumnRow"),
                },
                ],
            },

            {
                path: "/app/pricing",
                component: () =>
                    import("@/views/app/pricing/Pricing"),
                children: [{
                    path: "pricing-ver-one",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Pricing" },
                            { name: "Pricing Ver 1" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/pricing/PricingVerOne"),
                },
                {
                    path: "pricing-ver-two",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Account" },
                            { name: "Pricing Ver 2" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/pricing/PricingVerTwo"),
                },
                {
                    path: "pricing-ver-three",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Account" },
                            { name: "Pricing Ver 3" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/pricing/PricingVerThree"),
                },
                ],
            },
            {
                path: "/app/profile",
                component: () =>
                    import("@/views/app/profile/Profile"),
                children: [{
                    path: "profile-one",
                    name: "profile-one",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Profile" },
                            { name: "Profile Ver 1" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/profile/ProfileOne"),
                },
                {
                    path: "profile-two",
                    name: "profile-two",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Profile" },
                            { name: "Profile Ver 2" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/profile/ProfileTwo"),
                },
                ],
            },
            {
                path: "/app/pricing",
                component: () =>
                    import("@/views/app/pricing/Pricing"),
                children: [{
                    path: "pricing-ver-one",
                    name: "pricing-ver-one",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Pricing" },
                            { name: "Pricing Ver 1" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/pricing/PricingVerOne"),
                },
                {
                    path: "pricing-ver-two",
                    name: "pricing-ver-two",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Account" },
                            { name: "Pricing Ver 2" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/pricing/PricingVerTwo"),
                },
                {
                    path: "pricing-ver-three",
                    name: "pricing-ver-three",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Account" },
                            { name: "Pricing Ver 3" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/pricing/PricingVerThree"),
                },
                ],
            },
            {
                path: "/app/invoice",
                component: () =>
                    import("@/views/app/invoice/Invoice"),
                children: [{
                    path: "invoice-ver-one",
                    name: "invoice-ver-one",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Invoice" },
                            { name: "Invoice ver 1" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/invoice/InvoiceVerOne"),
                },
                {
                    path: "invoice-ver-two",
                    name: "invoice-ver-two",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Account" },
                            { name: "Invoice ver 2" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/invoice/InvoiceVerTwo"),
                },
                {
                    path: "edit-invoice",
                    name: "edit-invoice",
                    meta: {
                        breadcrumb: [
                            { name: "pages" },
                            { name: "Account" },
                            { name: "Edit Invoice" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/invoice/EditInvoice"),
                },
                ],
            },
            {
                path: "/app/pages",
                component: () =>
                    import("@/views/app/pages/Pages"),
                children: [{
                    path: "/app/pages/projects",
                    component: () =>
                        import("@/views/app/pages/projects/Projects"),

                    children: [{
                        path: "overview",
                        name: "overview",
                        meta: {
                            breadcrumb: [
                                { name: "pages" },
                                { name: "Projects" },
                                { name: "Overview" },
                            ],
                        },
                        component: () =>
                            import("@/views/app/pages/projects/Overview"),
                    },],
                },

                {
                    path: "/app/pages/invoice",
                    component: () =>
                        import("@/views/app/pages/invoice/Invoice"),
                    children: [{
                        path: "invoice-ver-one",
                        name: "invoice-ver-one",
                        meta: {
                            breadcrumb: [
                                { name: "pages" },
                                { name: "Invoice" },
                                { name: "Invoice ver 1" },
                            ],
                        },
                        component: () =>
                            import("@/views/app/pages/invoice/InvoiceVerOne"),
                    },
                    {
                        path: "invoice-ver-two",
                        name: "invoice-ver-two",
                        meta: {
                            breadcrumb: [
                                { name: "pages" },
                                { name: "Account" },
                                { name: "Invoice ver 2" },
                            ],
                        },
                        component: () =>
                            import("@/views/app/pages/invoice/InvoiceVerTwo"),
                    },
                    {
                        path: "edit-invoice",
                        name: "edit-invoice",
                        meta: {
                            breadcrumb: [
                                { name: "pages" },
                                { name: "Account" },
                                { name: "Edit Invoice" },
                            ],
                        },
                        component: () =>
                            import("@/views/app/pages/invoice/EditInvoice"),
                    },
                    ],
                },
                ],
            },
            {
                path: "/app/uiKits",
                component: () =>
                    import("@/views/app/uiKits/Index"),
                children: [{
                    path: "button",
                    name: "button",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "Button" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Button"),
                },
                {
                    path: "avatar",
                    name: "avatar",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "Avatar" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Avatar"),
                },
                {
                    path: "alerts",
                    name: "alerts",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "alerts" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Alerts"),
                },
                {
                    path: "accordion",
                    name: "accordion",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "accordion" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Accordion"),
                },
                {
                    path: "badge",
                    name: "badge",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "badge" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Badge"),
                },
                {
                    path: "chips",
                    name: "chips",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "chips" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Chips"),
                },
                {
                    path: "snackbar",
                    name: "snackbar",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "snackbar" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Snackbar"),
                },
                {
                    path: "sparklines",
                    name: "sparklines",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "sparklines" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Sparklines"),
                },
                {
                    path: "stepper",
                    name: "stepper",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "stepper" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/Stepper"),
                },
                {
                    path: "tooltip",
                    name: "tooltip",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "tooltip" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/ToolTip"),
                },
                {
                    path: "treeview",
                    name: "treeview",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "treeview" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/TreeView"),
                },
                {
                    path: "fileInputs",
                    name: "fileInputs",
                    meta: {
                        breadcrumb: [{ name: "UiKits" }, { name: "fileInputs" }],
                    },
                    component: () =>
                        import("@/views/app/uiKits/FileInputs"),
                },
                ],
            },
            {
                path: "/app/extraUiKits",
                component: () =>
                    import("@/views/app/extraUiKits/Index"),
                children: [{
                    path: "cards",
                    name: "cards",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "cards" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Cards"),
                },
                {
                    path: "bottom-navigation",
                    name: "bottom-navigation",
                    meta: {
                        breadcrumb: [
                            { name: "Extra UiKits" },
                            { name: "Bottom Navigation" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/BottomNavigation"),
                },
                {
                    path: "bottom-sheets",
                    name: "bottom-sheets",
                    meta: {
                        breadcrumb: [
                            { name: "Extra UiKits" },
                            { name: "Bottom Sheets" },
                        ],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/BottomSheets"),
                },
                {
                    path: "calendars",
                    name: "calendars",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "calendars" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Calendars"),
                },

                {
                    path: "list",
                    name: "list",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "list" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/List"),
                },
                {
                    path: "paginations",
                    name: "paginations",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "paginations" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Paginations"),
                },

                {
                    path: "Circular",
                    name: "circular",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "Circular" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Circular"),
                },
                {
                    path: "Linear",
                    name: "linear",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "Linear" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Linear"),
                },
                {
                    path: "ratings",
                    name: "ratings",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "ratings" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Ratings"), // dashboard
                },
                {
                    path: "tabs",
                    name: "tabs",
                    meta: {
                        breadcrumb: [{ name: "Extra UiKits" }, { name: "tabs" }],
                    },
                    component: () =>
                        import("@/views/app/extraUiKits/Tabs"), // dashboard
                },
                ],
            },
            {
                path: "/app/forms",
                component: () =>
                    import("@/views/app/forms/Index"),
                children: [{
                    path: "validation",
                    name: "validation",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "validation" }],
                    },
                    component: () =>
                        import("@/views/app/forms/Validation"),
                },
                {
                    path: "inputs",
                    name: "inputs",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "inputs" }],
                    },
                    component: () =>
                        import("@/views/app/forms/Inputs"),
                },
                {
                    path: "overflow-buttons",
                    name: "overflow-buttons",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "overflow buttons" }],
                    },
                    component: () =>
                        import("@/views/app/forms/OverflowButtons"),
                },
                {
                    path: "selects",
                    name: "selects",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "selects" }],
                    },
                    component: () =>
                        import("@/views/app/forms/Selects"),
                },
                {
                    path: "combobox",
                    name: "combobox",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "combobox" }],
                    },
                    component: () =>
                        import("@/views/app/forms/ComboBox"),
                },
                {
                    path: "selection-controls",
                    name: "selection-controls",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "selection-controls" }],
                    },
                    component: () =>
                        import("@/views/app/forms/SelectionControls"),
                },
                {
                    path: "sliders",
                    name: "sliders",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "sliders" }],
                    },
                    component: () =>
                        import("@/views/app/forms/Sliders"),
                },
                {
                    path: "textarea",
                    name: "textarea",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "textarea" }],
                    },
                    component: () =>
                        import("@/views/app/forms/Textarea"),
                },
                {
                    path: "textfields",
                    name: "textfields",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "textfields" }],
                    },
                    component: () =>
                        import("@/views/app/forms/TextFields"),
                }, ,
                {
                    path: "timepicker",
                    name: "timepicker",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "timepicker" }],
                    },
                    component: () =>
                        import("@/views/app/forms/TimePicker"),
                }, ,
                {
                    path: "datepicker",
                    name: "datepicker",
                    meta: {
                        breadcrumb: [{ name: "Forms" }, { name: "datepicker" }],
                    },
                    component: () =>
                        import("@/views/app/forms/DatePicker"),
                },
                ],
            },
            {
                path: "/app/tables",
                component: () =>
                    import("@/views/app/tables/Index"),
                children: [{
                    path: "dataIterators",
                    name: "dataIterators",
                    meta: {
                        breadcrumb: [{ name: "Datatables" }, { name: "dataIterators" }],
                    },
                    component: () =>
                        import("@/views/app/tables/DataIterators"),
                },
                {
                    path: "simpleTables",
                    name: "simpleTables",
                    meta: {
                        breadcrumb: [{ name: "Datatables" }, { name: "simpleTables" }],
                    },
                    component: () =>
                        import("@/views/app/tables/SimpleTables"),
                },
                {
                    path: "dataTables",
                    name: "dataTables",
                    meta: {
                        breadcrumb: [{ name: "Datatables" }, { name: "simpleTables" }],
                    },
                    component: () =>
                        import("@/views/app/tables/DataTables"),
                },
                ],
            },

            // {
            //   path: "",
            //   name: "Home",
            //   component: () => import("@/views/home/Index.vue")
            // }
        ],
    },
    {
        path: "/app/sessions",
        component: () =>
            import("@/views/app/sessions/Sessions"),

        children: [{
            path: "sign-in",
            name: "sign-in",
            component: () =>
                import("@/views/app/sessions/SignIn"),
        },
        {
            path: "error",
            name: "error",
            component: () =>
                import("@/views/app/sessions/Error"),
        },
        {
            path: "forgot",
            name: "forgot",
            component: () =>
                import("@/views/app/sessions/Forgot"),
        },
        {
            path: "lockscreen",
            name: "lockscreen",
            component: () =>
                import("@/views/app/sessions/Lockscreen"),
        },
        {
            path: "sign-in-two",
            name: "sign-in-two",
            component: () =>
                import("@/views/app/sessions/SignInTwo"),
        },
        {
            path: "sign-in-three",
            name: "sign-in-three",
            component: () =>
                import("@/views/app/sessions/SignInThree"),
        },
        {
            path: "sign-in-four",
            name: "sign-in-four",
            component: () =>
                import("@/views/app/sessions/SignInFour"),
        },
        {
            path: "sign-in-five",
            name: "sign-in-five",
            component: () =>
                import("@/views/app/sessions/SignInFive"),
        },
        {
            path: "sign-up",
            name: "sign-up",
            component: () =>
                import("@/views/app/sessions/SignUp"),
        },
        {
            path: "sign-up-2",
            name: "sign-up-2",
            component: () =>
                import("@/views/app/sessions/SignUpTwo"),
        },
        {
            path: "sign-up-5",
            name: "sign-up-5",
            component: () =>
                import("@/views/app/sessions/SignUpFive"),
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