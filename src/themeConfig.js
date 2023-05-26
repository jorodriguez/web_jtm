// Locale
// import { en } from '../../locale'
import colors from "vuetify/lib/util/colors";
export const themeConfig = {
    disableCustomizer: true, // options[Boolean] : true, false(default) /// HABILITAR PARA OTROS SISTEMAS PARA JTM NO

    rtl: false, // options[Boolean] : true, false(default)
    verticalSidebarMini: false, // options[Boolean] : true, false(default)
    verticalSidebarDrawer: true, // options[Boolean] : true, false(default)
    verticalCompactSidebarDrawer: true, // options[Boolean] : true, false(default)
    verticalSaasSidebarDrawer: true, // options[Boolean] : true, false(default)
    showBreadcrumb: true, // options[Boolean] : true, false(default)

    layout: "VerticalSix", //VerticalCompactSidebar,VerticalSaasLayout,VerticalSidebar,HorizontalBar,VerticalSix    
    isLoading: false,
    isDark: true,
    verticalSidebarDrawerColor: "success", // primary,white,sucsess,warning,etc
    appBarColor: "success", // primary,white,sucsess,warning,etc
};

const mq = window.matchMedia("(prefers-color-scheme: light)");

// export const vuetify = new Vuetify({
//   theme: { dark: mq.matches }
// });

// console.log(mq);

// mq.addEventListener("change", e => {
//   console.log(mq);
//   this.$vuetify.theme.dark = e.matches;
// });

export const themePreset = {
    breakpoint: {
        scrollBarWidth: 16,
        thresholds: {
            xs: 600,
            sm: 960,
            md: 1280,
            lg: 1920,
        },
    },

    rtl: false,

    theme: {
        // dark: mq.matches,
        dark: true, //Aqui cambiar a true el modo dark

        default: "dark",
        disable: false,
        options: {
            cspNonce: undefined,
            customProperties: true,
            minifyTheme: undefined,
            themeCache: undefined,
        },
        themes: {
            light: {
                primary: "#274374", //colors.blue,
                secondary: "#304156",
                success: '#88b04b', //colors.green,
                danger: colors.red,
                warning: colors.deepOrange,
                info: colors.indigo,

                dark: "#242939",

                background: "#f2f3f8",
            },
            dark: {
                primary: "#88b04b", // "#274374", //colors.blue,
                secondary: "#304156",
                success: colors.green,
                danger: colors.red,
                warning: colors.deepOrange,
                info: colors.indigo,
            },
        },
    },
};