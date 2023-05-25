export const items = [{
        divider: 'Ponte en marcha',
        title: 'TU ENTRENAMIENTO',
        icon: 'mdi-google-analytics',
        to: 'analytic',
    },
    {
        title: 'ANALISIS',
        icon: 'mdi-view-dashboard',
        to: 'learning-management',
    },
    {
        title: 'EVENTOS',
        icon: 'mdi-account-network',
        to: 'job-management',
    },
    {
        title: 'BLOG',
        icon: 'mdi-bitcoin',
        to: 'crypto-currency',
    },
    {
        title: 'NOTAS',
        icon: 'mdi-gift-open',
        to: 'donation',
    },
    {
        title: 'COBRANZA',
        icon: 'mdi-sale',
        to: 'sales',
    },
];


/*export const items = [
  {
    title: "Dashboards",
    icon: "mdi-desktop-mac-dashboard",
    group: "dashboards",
    // divider: "custom",
    children: [
      {
        title: "Job Management",
        icon: "mdi-account-network",
        to: "job-management",
        // icon: "mdi-circle-medium",
      },
      {
        title: "Sales",
        icon: "mdi-sale",
        to: "sales",
        // icon: "mdi-circle-medium",
      },
      {
        title: "Analytic",
        icon: "mdi-google-analytics",
        to: "analytic",
        // icon: "mdi-circle-medium",
      },
      {
        title: "Crypto Currency",
        icon: "mdi-bitcoin",
        to: "crypto-currency",
        // icon: "mdi-circle-medium",
      },
      {
        title: "Donation",
        icon: "mdi-gift-open",
        to: "donation",
        // icon: "mdi-circle-medium",
      },
    ],
  },
  //   {
  //     subheader: "Apps",
  //     icon: "mdi-apps-box",
  //     divider: true
  //   },

  {
    title: "Apps",
    icon: "mdi-apps-box",
    group: "apps",
    // divider: "custom",
    children: [
      {
        title: "Chat",

        to: "chat",
        icon: "mdi-circle-medium",
      },
      {
        title: "File Manager",

        to: "file-manager",
        icon: "mdi-circle-medium",
      },
      {
        title: "Note",

        to: "note",
        icon: "mdi-circle-medium",
      },
      {
        title: "Scrumboard",

        to: "scrumboard",
        icon: "mdi-circle-medium",
      },
      {
        title: "Todo",

        to: "todo",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Charts",
    icon: "mdi-chart-bar-stacked",
    group: "charts",
    children: [
      {
        title: "Area",

        to: "ApexAreaChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Bar",

        to: "ApexBarChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Mix",

        to: "ApexMixChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Column",

        to: "ApexColumnChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Pie",

        to: "ApexPieChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Radar",

        to: "ApexRadarChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Scatter",

        to: "ApexScatterChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Sparkline",

        to: "ApexSparklineChart",
        icon: "mdi-circle-medium",
      },
      {
        title: "Custom",

        to: "CustomApexChart",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Account ",
    icon: "mdi-account",
    group: "account",
    // divider: "Pages",
    children: [
      {
        title: " Data",
        to: "AccountData",
        icon: "mdi-circle-medium",
      },
      {
        title: "Home",
        to: "AccountHome",
        icon: "mdi-circle-medium",
      },
      {
        title: " Payment",
        to: "AccountPayment",
        icon: "mdi-circle-medium",
      },
      {
        title: " People",
        to: "AccountPeople",
        icon: "mdi-circle-medium",
      },
      {
        title: " Personal Info",
        to: "AccountPersonalInfo",
        icon: "mdi-circle-medium",
      },
      {
        title: " Security",
        to: "AccountSecurity",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Faq ",
    icon: "mdi-chat-question",
    group: "faq",
    children: [
      {
        title: "Faq One",
        to: "FaqOne",
        icon: "mdi-circle-medium",
      },
      {
        title: "Faq Two",
        to: "FaqTwo",
        icon: "mdi-circle-medium",
      },
      {
        title: "Faq Three",
        to: "FaqThree",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Widgets",
    icon: "mdi-chart-bar-stacked",
    group: "widgets",
    children: [
      {
        title: "General",
        to: "general",
        icon: "mdi-circle-medium",
      },
      {
        title: "widgets Charts",
        to: "widgetsCharts",
        icon: "mdi-circle-medium",
      },
      {
        title: "widgets Table",
        to: "widgetsTable",
        icon: "mdi-circle-medium",
      },
    ],
  },
  // {
  //   title: "Widgets",
  //   icon: "mdi-chart-bar-stacked",
  //   group: "widgets",
  //   children: [
  //     {
  //       title: "General",
  //       to: "general",
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "widgets Charts",
  //       to: "widgetsCharts",
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "widgets Table",
  //       to: "widgetsTable",
  //       icon: "mdi-circle-medium",
  //     },
  //   ],
  // },
  {
    title: "List",
    icon: "mdi-format-list-checkbox",
    group: "list",
    children: [
      {
        title: "List Column",
        to: "list-column",
        icon: "mdi-circle-medium",
      },
      {
        title: "List Column Two",
        to: "list-column-two",
        icon: "mdi-circle-medium",
      },
      {
        title: "List Column Three",
        to: "list-column-three",
        icon: "mdi-circle-medium",
      },
      {
        title: "List Column Row",
        to: "list-column-row",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Profile",
    icon: "mdi-face-man",
    group: "profile",
    children: [
      {
        title: "Profile Ver 1",
        to: "profile-one",
        icon: "mdi-circle-medium",
      },
      {
        title: "Profile Ver 2",
        to: "profile-two",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Pricing",
    icon: "mdi-file-table-box",
    group: "pricing",
    children: [
      {
        title: "Pricing Ver 1",
        to: "pricing-ver-one",
        icon: "mdi-circle-medium",
      },
      {
        title: "Pricing Ver 2",
        to: "pricing-ver-two",
        icon: "mdi-circle-medium",
      },
      {
        title: "Pricing Ver 3",
        to: "pricing-ver-three",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Invoice",
    icon: "mdi-book-open-page-variant",
    group: "Invoice",
    children: [
      {
        title: "Invoice ver 1",
        to: "invoice-ver-one",
        icon: "mdi-circle-medium",
      },
      {
        title: "Invoice ver 2",
        to: "invoice-ver-two",
        icon: "mdi-circle-medium",
      },
      {
        title: "Edit Invoice",
        to: "edit-invoice",
        icon: "mdi-circle-medium",
      },
    ],
  },
  // {
  //   title: "Pages",
  //   icon: "mdi-book-open",
  //   group: "pages",
  //   children: [
  //     {
  //       title: "Projects",
  //       group: "pages/projects",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Overview",
  //           to: "overview",
  //           icon: "mdi-circle-medium",
  //         },
  //       ],
  //       // icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "Widgets",
  //       group: "pages/widgets",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "General",

  //           to: "general",
  //         },
  //         {
  //           title: "Charts",

  //           to: "widgetsCharts",
  //         },
  //         {
  //           title: "Table",

  //           to: "widgetsTable",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "Faq ",
  //       group: "pages/faq",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Faq  V1",

  //           to: "faq-one",
  //         },
  //         {
  //           title: "Faq  V2",

  //           to: "faq-two",
  //         },
  //         {
  //           title: "Faq  V3",

  //           to: "faq-three",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "List",
  //       group: "pages/list",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "List Column One",

  //           to: "list-column",
  //         },
  //         {
  //           title: "List Column Two",

  //           to: "list-column-two",
  //         },
  //         {
  //           title: "List Column Three",

  //           to: "list-column-three",
  //         },
  //         {
  //           title: "List Column Row",

  //           to: "list-column-row",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "Profile",
  //       group: "pages/profile",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Profile Ver 1",

  //           to: "profile-one",
  //         },
  //         {
  //           title: "Profile Ver 2",

  //           to: "profile-two",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "Account ",
  //       group: "pages/account",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: " Home",

  //           to: "account-home",
  //         },
  //         {
  //           title: " Data",

  //           to: "account-data",
  //         },
  //         {
  //           title: " Payment",

  //           to: "account-payment",
  //         },
  //         {
  //           title: " People",

  //           to: "account-people",
  //         },
  //         {
  //           title: " Security",

  //           to: "account-security",
  //         },
  //         {
  //           title: " Personal Info",

  //           to: "account-personal-info",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "Pricing",
  //       group: "pages/pricing",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Pricing Ver One",

  //           to: "pricing-ver-one",
  //         },
  //         {
  //           title: "Pricing Ver Two",

  //           to: "pricing-ver-two",
  //         },
  //         {
  //           title: "Pricing Ver Three",

  //           to: "pricing-ver-three",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //     {
  //       title: "Invoice",
  //       group: "pages/invoice",
  //       // icon: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Invoice Ver 1",

  //           to: "invoice-ver-one",
  //         },
  //         {
  //           title: "Invoice Ver 2",

  //           to: "invoice-ver-two",
  //         },
  //         {
  //           title: "Edit Invoice",

  //           to: "edit-invoice",
  //         },
  //       ],
  //       icon: "mdi-circle-medium",
  //     },
  //   ],
  // },
  {
    title: "Ecommerce",
    icon: "mdi-cart",
    group: "ecommerce",
    children: [
      {
        title: "Product List",

        to: "ecommerce-product-list",
        icon: "mdi-circle-medium",
      },
      {
        title: "Product Details",

        to: "ecommerce-product-details",
        icon: "mdi-circle-medium",
      },
      {
        title: "Product Checkout",

        to: "ecommerce-product-checkout",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Basic Kits",
    icon: "mdi-diamond-stone",
    group: "uiKits",
    // divider: "components",
    children: [
      {
        title: "Button",

        to: "button",
        icon: "mdi-circle-medium",
      },
      {
        title: "Avatar",

        to: "avatar",
        icon: "mdi-circle-medium",
      },
      {
        title: "Alerts",

        to: "alerts",
        icon: "mdi-circle-medium",
      },
      {
        title: "Accordion",

        to: "accordion",
        icon: "mdi-circle-medium",
      },
      {
        title: "Badge",

        to: "badge",
        icon: "mdi-circle-medium",
      },
      {
        title: "Chips",

        to: "chips",
        icon: "mdi-circle-medium",
      },
      {
        title: "Snackbar",

        to: "snackbar",
        icon: "mdi-circle-medium",
      },
      // {
      //   title: 'Sparklines',
      //   icon: 'mdi-circle-medium',
      //   to: 'sparklines'
      // },
      {
        title: "Stepper",

        to: "stepper",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Advance Kits",
    icon: "mdi-dice-5",
    group: "extraUiKits",
    children: [
      {
        title: "Cards",

        to: "cards",
        icon: "mdi-circle-medium",
      },

      {
        title: "Calendars",

        to: "calendars",
        icon: "mdi-circle-medium",
      },
      {
        title: "Circular",

        to: "circular",
        icon: "mdi-circle-medium",
      },
      {
        title: "Linear",

        to: "linear",
        icon: "mdi-circle-medium",
      },
      {
        title: "Pagination",

        to: "paginations",
        icon: "mdi-circle-medium",
      },
      {
        title: "List",

        to: "list",
        icon: "mdi-circle-medium",
      },
      {
        title: "Bottom Navigation",

        to: "bottom-navigation",
        icon: "mdi-circle-medium",
      },
      {
        title: "Bottom Sheets",

        to: "bottom-sheets",
        icon: "mdi-circle-medium",
      },
      {
        title: "Ratings",

        to: "ratings",
        icon: "mdi-circle-medium",
      },
      {
        title: "Tabs",

        to: "tabs",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Forms",
    icon: "mdi-help-box",
    group: "forms",
    children: [
      {
        title: "Combobox",

        to: "combobox",
        icon: "mdi-circle-medium",
      },
      {
        title: "validation",

        to: "validation",
        icon: "mdi-circle-medium",
      },
      // {
      //   title: 'Inputs',
      //   icon: 'mdi-circle-medium',
      //   to: 'inputs',
      // },
      {
        title: "Overflow Buttons",

        to: "overflow-buttons",
        icon: "mdi-circle-medium",
      },

      {
        title: "Selects",

        to: "selects",
        icon: "mdi-circle-medium",
      },
      {
        title: "Selection Controls",

        to: "selection-controls",
        icon: "mdi-circle-medium",
      },
      {
        title: "Sliders",

        to: "sliders",
        icon: "mdi-circle-medium",
      },
      {
        title: "Textarea",

        to: "textarea",
        icon: "mdi-circle-medium",
      },
      {
        title: "Textfields",

        to: "textfields",
        icon: "mdi-circle-medium",
      },

      {
        title: "DatePicker",

        to: "datepicker",
        icon: "mdi-circle-medium",
      },
      {
        title: "TimePicker",

        to: "timepicker",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Datatables",
    icon: "mdi-table",
    group: "tables",
    children: [
      {
        title: "Data Iterators",

        to: "dataIterators",
        icon: "mdi-circle-medium",
      },
      {
        title: "Simple Tables",

        to: "simpleTables",
        icon: "mdi-circle-medium",
      },
      {
        title: "Data Tables",

        to: "dataTables",
        icon: "mdi-circle-medium",
      },
    ],
  },
  {
    title: "Custom Datatable",
    icon: "mdi-table-large",
    group: "customTable",
    children: [
      {
        title: "Table Ver One",

        to: "tableOne",
        icon: "mdi-circle-medium",
      },
      {
        title: "Table Ver Two",

        to: "tableTwo",
        icon: "mdi-circle-medium",
      },
      {
        title: "Table Ver Three",

        to: "tableThree",
        icon: "mdi-circle-medium",
      },
    ],
  },

  {
    title: "Sessions",
    icon: "mdi-logout-variant",
    group: "sessions",
    children: [
      {
        title: "Sign In",

        to: "sign-in",
        icon: "mdi-circle-medium",
      },
      {
        title: "Error",

        to: "error",
        icon: "mdi-circle-medium",
      },
      {
        title: "Forgot",

        to: "forgot",
        icon: "mdi-circle-medium",
      },
      {
        title: "Lockscreen",

        to: "lockscreen",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignIn ver 2",

        to: "sign-in-two",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignIn ver 3",

        to: "sign-in-three",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignIn ver 4",

        to: "sign-in-four",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignIn ver 5",

        to: "sign-in-five",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignUp",

        to: "sign-up",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignUp Ver 2",

        to: "sign-up-2",
        icon: "mdi-circle-medium",
      },
      {
        title: "SignUp Ver 5",

        to: "sign-up-5",
        icon: "mdi-circle-medium",
      },
    ],
  },
];
*/