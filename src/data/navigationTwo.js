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
    divider: "Dashboards",
    title: "Learning Management",
    iconTwo: "mdi-view-dashboard",
    to: "learning-management",
  },
  {
    title: "Job Management",
    iconTwo: "mdi-account-network",
    to: "job-management",
  },
  {
    title: "Sales",
    iconTwo: "mdi-sale",
    to: "sales",
  },
  {
    title: "Analytic",
    iconTwo: "mdi-google-analytics",
    to: "analytic",
  },
  {
    title: "Crypto Currency",
    iconTwo: "mdi-bitcoin",
    to: "crypto-currency",
  },
  {
    title: "Donation",
    iconTwo: "mdi-gift-open",
    to: "donation",
  },

  //   {
  //     subheader: "Apps",
  //     iconTwo: "mdi-apps-box",
  //     divider: true
  //   },

  {
    title: "Apps",
    iconTwo: "mdi-apps-box",
    group: "apps",
    divider: "custom",
    children: [
      {
        title: "Chat",

        to: "chat",
      },
      {
        title: "File Manager",

        to: "file-manager",
      },
      {
        title: "Note",

        to: "note",
      },
      {
        title: "Scrumboard",

        to: "scrumboard",
      },
      {
        title: "Todo",

        to: "todo",
      },
    ],
  },
  {
    title: "Charts",
    iconTwo: "mdi-chart-bar-stacked",
    group: "charts",
    children: [
      {
        title: "Area",

        to: "ApexAreaChart",
      },
      {
        title: "Bar",

        to: "ApexBarChart",
      },
      {
        title: "Mix",

        to: "ApexMixChart",
      },
      {
        title: "Column",

        to: "ApexColumnChart",
      },
      {
        title: "Pie",

        to: "ApexPieChart",
      },
      {
        title: "Radar",

        to: "ApexRadarChart",
      },
      {
        title: "Scatter",

        to: "ApexScatterChart",
      },
      {
        title: "Sparkline",

        to: "ApexSparklineChart",
      },
      {
        title: "Custom",

        to: "CustomApexChart",
      },
    ],
  },
  {
    title: "Account",
    iconTwo: "mdi-chart-bar-stacked",
    group: "account",
    divider: "Pages",
    children: [
      {
        title: "Data",
        to: "AccountData",
      },
      {
        title: "Home",
        to: "AccountHome",
      },
      {
        title: "Payment",
        to: "AccountPayment",
      },
      {
        title: "People",
        to: "AccountPeople",
      },
      {
        title: "Personal Info",
        to: "AccountPersonalInfo",
      },
      {
        title: "Security",
        to: "AccountSecurity",
      },
    ],
  },
  {
    title: "Faq",
    iconTwo: "mdi-chart-bar-stacked",
    group: "faq",
    children: [
      {
        title: "Faq V1",
        to: "FaqOne",
      },
      {
        title: "Faq V2",
        to: "FaqTwo",
      },
      {
        title: "Faq V3",
        to: "FaqThree",
      },
    ],
  },
  {
    title: "Widgets",
    iconTwo: "mdi-chart-bar-stacked",
    group: "widgets",
    children: [
      {
        title: "General",
        to: "general",
      },
      {
        title: "widgets Charts",
        to: "widgetsCharts",
      },
      {
        title: "widgets Table",
        to: "widgetsTable",
      },
    ],
  },
  {
    title: "Widgets",
    iconTwo: "mdi-chart-bar-stacked",
    group: "widgets",
    children: [
      {
        title: "General",
        to: "general",
      },
      {
        title: "widgets Charts",
        to: "widgetsCharts",
      },
      {
        title: "widgets Table",
        to: "widgetsTable",
      },
    ],
  },
  {
    title: "List",
    iconTwo: "mdi-chart-bar-stacked",
    group: "list",
    children: [
      {
        title: "List Column",
        to: "list-column",
      },
      {
        title: "List Column Two",
        to: "list-column-two",
      },
      {
        title: "List Column Three",
        to: "list-column-three",
      },
      {
        title: "List Column Row",
        to: "list-column-row",
      },
    ],
  },
  {
    title: "Profile",
    iconTwo: "mdi-chart-bar-stacked",
    group: "profile",
    children: [
      {
        title: "Profile Ver 1",
        to: "profile-one",
      },
      {
        title: "Profile Ver 2",
        to: "profile-two",
      },
    ],
  },
  {
    title: "Pricing",
    iconTwo: "mdi-chart-bar-stacked",
    group: "pricing",
    children: [
      {
        title: "Pricing Ver 1",
        to: "pricing-ver-one",
      },
      {
        title: "Pricing Ver 2",
        to: "pricing-ver-two",
      },
      {
        title: "Pricing Ver 3",
        to: "pricing-ver-three",
      },
    ],
  },
  {
    title: "Invoice",
    iconTwo: "mdi-chart-bar-stacked",
    group: "Invoice",
    children: [
      {
        title: "Invoice ver 1",
        to: "invoice-ver-one",
      },
      {
        title: "Invoice ver 2",
        to: "invoice-ver-two",
      },
      {
        title: "Edit Invoice",
        to: "edit-invoice",
      },
    ],
  },
  // {
  //   title: "Pages",
  //   iconTwo: "mdi-book-open",
  //   group: "pages",
  //   children: [
  //     {
  //       title: "Projects",
  //       group: "pages/projects",
  //       // iconTwo: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Overview",
  //           to: "overview",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Widgets",
  //       group: "pages/widgets",
  //       // iconTwo: 'mdi-view-dashboard',
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
  //     },
  //     {
  //       title: "Faq",
  //       group: "pages/faq",
  //       // iconTwo: 'mdi-view-dashboard',
  //       children: [
  //         {
  //           title: "Faq V1",

  //           to: "faq-one",
  //         },
  //         {
  //           title: "Faq V2",

  //           to: "faq-two",
  //         },
  //         {
  //           title: "Faq V3",

  //           to: "faq-three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "List",
  //       group: "pages/list",
  //       // iconTwo: 'mdi-view-dashboard',
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
  //     },
  //     {
  //       title: "Profile",
  //       group: "pages/profile",
  //       // iconTwo: 'mdi-view-dashboard',
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
  //     },
  //     {
  //       title: "Account",
  //       group: "pages/account",
  //       // iconTwo: 'mdi-view-dashboard',
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
  //     },
  //     {
  //       title: "Pricing",
  //       group: "pages/pricing",
  //       // iconTwo: 'mdi-view-dashboard',
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
  //     },
  //     {
  //       title: "Invoice",
  //       group: "pages/invoice",
  //       // iconTwo: 'mdi-view-dashboard',
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
  //     },
  //   ],
  // },
  {
    title: "Ecommerce",
    iconTwo: "mdi-cart",
    group: "ecommerce",
    children: [
      {
        title: "Product List",

        to: "ecommerce-product-list",
      },
      {
        title: "Product Details",

        to: "ecommerce-product-details",
      },
      {
        title: "Product Checkout",

        to: "ecommerce-product-checkout",
      },
    ],
  },
  {
    title: "Basic Kits",
    iconTwo: "mdi-diamond-stone",
    group: "uiKits",
    divider: "components",
    children: [
      {
        title: "Button",

        to: "button",
      },
      {
        title: "Avatar",

        to: "avatar",
      },
      {
        title: "Alerts",

        to: "alerts",
      },
      {
        title: "Accordion",

        to: "accordion",
      },
      {
        title: "Badge",

        to: "badge",
      },
      {
        title: "Chips",

        to: "chips",
      },
      {
        title: "Snackbar",

        to: "snackbar",
      },
      // {
      //   title: 'Sparklines',
      //   iconTwo: 'mdi-circle-medium',
      //   to: 'sparklines'
      // },
      {
        title: "Stepper",

        to: "stepper",
      },
    ],
  },
  {
    title: "Advance Kits",
    iconTwo: "mdi-dice-5",
    group: "extraUiKits",
    children: [
      {
        title: "Cards",

        to: "cards",
      },

      {
        title: "Calendars",

        to: "calendars",
      },
      {
        title: "Circular",

        to: "circular",
      },
      {
        title: "Linear",

        to: "linear",
      },
      {
        title: "Pagination",

        to: "paginations",
      },
      {
        title: "List",

        to: "list",
      },
      {
        title: "Bottom Navigation",

        to: "bottom-navigation",
      },
      {
        title: "Bottom Sheets",

        to: "bottom-sheets",
      },
      {
        title: "Ratings",

        to: "ratings",
      },
      {
        title: "Tabs",

        to: "tabs",
      },
    ],
  },
  {
    title: "Forms",
    iconTwo: "mdi-help-box",
    group: "forms",
    children: [
      {
        title: "Combobox",

        to: "combobox",
      },
      {
        title: "validation",

        to: "validation",
      },
      // {
      //   title: 'Inputs',
      //   iconTwo: 'mdi-circle-medium',
      //   to: 'inputs',
      // },
      {
        title: "Overflow Buttons",

        to: "overflow-buttons",
      },

      {
        title: "Selects",

        to: "selects",
      },
      {
        title: "Selection Controls",

        to: "selection-controls",
      },
      {
        title: "Sliders",

        to: "sliders",
      },
      {
        title: "Textarea",

        to: "textarea",
      },
      {
        title: "Textfields",

        to: "textfields",
      },

      {
        title: "DatePicker",

        to: "datepicker",
      },
      {
        title: "TimePicker",

        to: "timepicker",
      },
    ],
  },
  {
    title: "Datatables",
    iconTwo: "mdi-table",
    group: "tables",
    children: [
      {
        title: "Data Iterators",

        to: "dataIterators",
      },
      {
        title: "Simple Tables",

        to: "simpleTables",
      },
      {
        title: "Data Tables",

        to: "dataTables",
      },
    ],
  },
  {
    title: "Custom Datatable",
    iconTwo: "mdi-table-large",
    group: "customTable",
    children: [
      {
        title: "Table Ver One",

        to: "tableOne",
      },
      {
        title: "Table Ver Two",

        to: "tableTwo",
      },
      {
        title: "Table Ver Three",

        to: "tableThree",
      },
    ],
  },

  {
    title: "Sessions",
    iconTwo: "mdi-logout-variant",
    group: "sessions",
    children: [
      {
        title: "Sign In",

        to: "sign-in",
      },
      {
        title: "Error",

        to: "error",
      },
      {
        title: "Forgot",

        to: "forgot",
      },
      {
        title: "Lockscreen",

        to: "lockscreen",
      },
      {
        title: "SignIn ver 2",

        to: "sign-in-two",
      },
      {
        title: "SignIn ver 3",

        to: "sign-in-three",
      },
      {
        title: "SignIn ver 4",

        to: "sign-in-four",
      },
      {
        title: "SignIn ver 5",

        to: "sign-in-five",
      },
      {
        title: "SignUp",

        to: "sign-up",
      },
      {
        title: "SignUp Ver 2",

        to: "sign-up-2",
      },
      {
        title: "SignUp Ver 5",

        to: "sign-up-5",
      },
    ],
  },
];
*/