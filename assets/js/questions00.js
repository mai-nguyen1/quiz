// SAP Certified Development Associate - SAP Fiori Application Developer - Full _ ERPPrep(20).PDF
const questions00 = [
  {
    questionText:
      "What best practices of the following list are best practices for SAPUI?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Minimize the code in the index.html",
      "Make use of patterns",
      "Use asynchronous model definition in your JavaScript code",
      "Describe your app by a set of metadata",
    ],
    wrongAns: ["Use synchronous model definition syntax (SMD)"],
  },
  {
    questionText:
      "What are the main characteristics of a search field in SAP Fiori element-based applications?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "No value help dialog",
      "Supports fuzzy search",
      "Finds a keyword in multiply fields",
      "",
      "",
      "",
    ],
    wrongAns: ["Provides multiple search fields", "", "", "", "", ""],
  },
  {
    questionText:
      "Scenario: A developer is tasked with creating a custom UI element that can be reused across multiple SAPUI5 applications. This UI element has unique properties and behaviors not available in standard controls.\n Which extensibility approach should the developer use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Custom Controls", "", "", "", "", ""],
    wrongAns: [
      "UI Controller Hooks",
      "Extension Points",
      "Component Variants",
      "",
      "",
      "",
    ],
  },
  {
    questionText: "What is the purpose of build server?",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Provides software that allows continuous integration",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Used for code review",
      "Used for version control",
      "Manage components build artifacts, and releases candidates in one central location",
      "",
      "",
      "",
    ],
  },
  {
    questionText: "What OData versions are currently supported by SAPUI5?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: ["OData V4", "OData V2", "", "", "", ""],
    wrongAns: ["OData V5", "OData V7", "", "", "", ""],
  },
  {
    questionText: "SAP Business Application Studio is primarily used for...",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Developing and deploying business applications",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Designing Fiori user interfaces",
      "Monitoring network traffic",
      "Database administration",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "Which technologies are used to create Hybrid apps and SAPUI5 apps?",
    questionHint: "Please choose the correct answer",
    correctAns: ["HTML5, JavaScript and CSS", "", "", "", "", ""],
    wrongAns: [
      "HTML, JSON and CSS3",
      "XML, JavaScript and CSS3",
      "XML, JSON and CSS",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "Scenario: A developer is tasked with creating a dashboard that provides a quick overview of key performance indicators (KPIs) for a logistics company\n Which SAP Fiori Element would be most suitable for this purpose?",
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "List Report",
      "Overview Page",
      "Analytical List Page",
      "",
      "",
      "",
    ],
    wrongAns: ["Object Page", "Worklist", "", "", "", ""],
  },
  {
    questionText:
      "How can you hide some columns when the list report is accessed by a mobile phone?",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Set UI.lineItem importance for those fields as #LOW or #MEDIUM",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Prepare different version of @UI.lineitem and assign them as different qualifier",
      "Put all fields, which are not important at the end of the report, when screen gets smaller, the fields will hide automatically",
      "Add @UI.hidden for fields, not import",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "What is the main benefit to using predefined CSS margin/padding classes of SAPUI5?",
    questionHint: "Please choose the correct answer",
    correctAns: ["Consistent spacing", "", "", "", "", ""],
    wrongAns: [
      "Consistent width",
      "Consistent borders",
      "Consistent height",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "You want to use transaction /UI2/FLP to start the SAP Fiori Launchpad using the Web Dispatcher. Which database table do you use to configure this?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["HTTPURLLOC", "", "", "", "", ""],
    wrongAns: ["HTTP_MADMIM", "HTTP_WHITELIST", "HTTP_CSP_MADMIN", "", "", ""],
  },
  {
    questionText:
      "You need the server to sort and filter the data used in your customer’s app. Which SAPUI5-supported data model must you use",
    questionHint: "Please choose the correct answer",
    correctAns: ["ODataModel", "", "", "", "", ""],
    wrongAns: ["ResourceModel", "JSONModel", "XMLModel", "", "", ""],
  },
  {
    questionText: "What is the usage of Object Model annotations",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Annotation for structured and transactional aspects of the data model",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Annotation for the consumption layer",
      "UI-relevant annotations used SAP Fiori elements",
      "Semantic annotation for fields of the result set",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "You need to strengthen the connection security between the Web IDE and the Hybrid App Toolkit Connector. Which of the following activities do you perform?",
    questionHint: "Please choose the correct answer",
    correctAns: ["Replace the default API key", "", "", "", "", ""],
    wrongAns: [
      "Install an X.509 certificate",
      "Run the connector with administrator rights",
      "Change the default port number",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "In the context of SAP Fiori deployment, what is the primary purpose of transport requests?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Transporting changes between systems", "", "", "", "", ""],
    wrongAns: [
      "Debugging applications",
      "Testing applications",
      "Monitoring application performance",
      "",
      "",
      "",
    ],
  },
  {
    questionText: "What are Technical Catalogs used for",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "As a reference for Business Catalogs",
      "To store tiles and target mappings by technology per solution area",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "To reference tiles and target mappings according to Segregation of Duties for example a Purchaser, a Buyer and so on",
      "As a reference for Business Groups",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "For which operations will the SAP Gateway server compute and return a new ETag in a response header?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["PUT", "POST", "", "", "", ""],
    wrongAns: ["GET", "DELETE", "", "", "", ""],
  },
  {
    questionText:
      "Scenario: An e-commerce company is developing an SAPUI5 application to manage customer orders. The application needs to handle large datasets and ensure efficient data retrieval./nWhich of the following OData features would be essential for this purpose?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Filtering", "Batch operations", "Pagination", "", "", ""],
    wrongAns: ["Sorting", "Aggregation", "", "", "", ""],
  },
  {
    questionText:
      "What happens if the text is not available in the customized bundle of your extension?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "SAPUI5 tries to find the text in the resource bundle of the standard application.",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "The key will display in the application in capital letters",
      "No text is displayed",
      "An exception is raised",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "In the SAP Fiori Launchpad, which component serves as a container that holds one or more tiles or links?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Group", "", "", "", "", ""],
    wrongAns: ["Catalog", "Tile", "Role", "", "", ""],
  },
  {
    questionText:
      "What are the basic guidelines of the Extension Point concept of SAPUI5?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "The custom app and the parent app contain a component.js file",
      "The custom app is located in a separate project",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "The parent app contains all modifications",
      "The custom app remains modification free",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "Which of the following types are types of cards in an Overview Page?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "List Cards",
      "Table Cards",
      "Link List Cards",
      "Analytic Cards",
      "",
      "",
    ],
    wrongAns: ["Array Cards", "", "", "", "", ""],
  },
  {
    questionText:
      "In SAPUI5, which feature allows for the automatic update of the UI when the underlying model data changes?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Two-way Data Binding", "", "", "", "", ""],
    wrongAns: [
      "Static Binding",
      "Direct Data Access",
      "One-way Data Binding",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "Which of the following is NOT a key capability of the SAP BTP Integration Suite?",
    questionHint: "Please choose the correct answer",
    correctAns: ["Application extension", "", "", "", "", ""],
    wrongAns: [
      "API management",
      "Data intelligence",
      "Process integration",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "Which of the following components in the SAP Fiori architecture is responsible for defining the data model and business logic for SAP Fiori apps?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Back-end server", "", "", "", "", ""],
    wrongAns: [
      "Front-end server",
      "OData service",
      "Gateway server",
      "",
      "",
      "",
    ],
  },
  {
    questionText:
      "Which of the following best describes the primary purpose of the SAP Business Technology Platform (SAP BTP)?",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "An integrated environment for application development, integration, and analytics",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "A user interface design tool",
      "A database management system",
      "A platform for integrating third-party applications",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Scenario: A developer is creating an SAPUI5 application that needs to display a list of products. The data
    for the products is stored in a remote server.
    Which of the following would be the most suitable approach to fetch and display this data?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Use of Resource Model",
      "Integration with OData Service",
      "Use of JSON Model",
      "",
      "",
      "",
    ],
    wrongAns: ["Use of XML Model", "Direct database queries", "", "", "", ""],
  },
  {
    questionText: `Which element in the SAPUI5 architecture holds the data in JSON or XML?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Model", "", "", "", "", ""],
    wrongAns: ["View", "Controller", "Component", "", "", ""],
  },
  {
    questionText: `You develop an SAPUI5 app and implement a FacetFilter. What events are triggered when the user
    interacts with the FactFilter control?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["confirm", "reset", "", "", "", ""],
    wrongAns: ["oninit", "listFilter", "", "", "", ""],
  },
  {
    questionText: `Which information is included in the SAPUI5 app’s manifest.json file?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "App ID, Name and Version",
      "SAPUI5 dependencies",
      "Referenced data sources",
      "",
      "",
      "",
    ],
    wrongAns: ["Localization keys", "Client side data-models", "", "", "", ""],
  },
  {
    questionText: `Where are the themes saved for the SAP Fiori launchpad?    `,
    questionHint: "Please choose the correct answer.",
    correctAns: ["In the theme repository", "", "", "", "", ""],
    wrongAns: [
      "In the bootstrap",
      "In the UI theme designer tool",
      "In the theme data center",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Scenario: A company wants to customize the look and feel of their SAP Fiori apps to align with their
    branding guidelines. Which component of the SAP Fiori architecture would facilitate this customization?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Theme Designer", "SAPUI5 library", "", "", "", ""],
    wrongAns: ["SAP Fiori Launchpad", "SAP Fiori Designer", "", "", "", ""],
  },
  {
    questionText: `Which of the following extensibility options in SAPUI5 allows developers to add or replace views,
    controllers, or other application files?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["Extension Points", "", "", "", "", ""],
    wrongAns: [
      "Component Variants",
      "Custom Controls",
      "UI Controller Hooks",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which properties are part of the design phase when you develop SAP Fiori apps?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Ideation, Prototyping and Validation", "", "", "", "", ""],
    wrongAns: [
      "Developing, Testing and Deploying",
      "Scoping, 360 degree research and Synthesis",
      "Requirement gathering, Research and Documentation",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `You develop an SAPUI5 app that updates data for sales order and sales order items on the back-end
    system. What do you create to implement a deep insert?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Create an object structure that defines the hierarchy",
      "Create a nested structure for Sales Order and Sales Order Items",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Create a flat structure with Sales Order and Sales Order Items, and then add an expand command",
      "Create individual structures for both Sales Order and Sales Order Items, and then batch them",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `You want to create a business catalog for all employees that contains a standard SAP Fiori app. How
    would you do this?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Reference the tile from a Technical Catalog provided by SAP",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Reference the tile from a SAP Business Catalog",
      "Reference the tile from a SAP Business Group",
      "Reference the tile from Odata metadata",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which of the following tools in SAP Fiori is primarily used for automated testing of applications?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Fiori Test Recorder", "", "", "", "", ""],
    wrongAns: [
      "SAP Fiori Inspector",
      "SAP Fiori Monitor",
      "SAP Fiori Debugger",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which aspects should be considered in deciding which layout template to use?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "You need to consider what the user wants to achieve when working in the app",
      "It is helpful to answer questions on the nature of tasks",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "You need to consider which browser type is used",
      "You need to analyze what end device the app is executed on",
      "You need to analyze the capabilities of the user",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which model supports deep inserts?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["OData model", "", "", "", "", ""],
    wrongAns: ["XML model", "Resource model", "JSON model", "", "", ""],
  },
  {
    questionText: `For which app type in SAP Fiori do you install the KPI framework?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Analytical app", "", "", "", "", ""],
    wrongAns: ["Transactional app", "Legacy app", "Factsheet app", "", "", ""],
  },
  {
    questionText: `To perform a QUnit test, what do you include in a test page under your webapp folder?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAPUI5 bootstrap code", "", "", "", "", ""],
    wrongAns: ["Mock code", "Stub code", "OPA function", "", "", ""],
  },
  {
    questionText: `What is Apache Cordova?`,
    questionHint: "Please choose the correct answer",
    correctAns: [
      "An open source mobile development framework",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "API provided by SAP to access mobile device features",
      "SAP product to run SAP Fiori applications on mobile device",
      "A cloud service to access data from mobile devices",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Your customer wants to extend an SAP Fiori app through a Controller Extension. When can a controller
    extension lead to a crash?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "If the original code required to run the application is overwritten.",
      "If the extension code accesses parts of the original application that were removed",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "If the extension code exists in the extended app but the controller name is changed by an app update",
      "If the extension code exists and is NOT referenced in the original view.",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What makes a standard UI control to be named as a complex control?    `,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Aggregations", "Associations", "", "", "", ""],
    wrongAns: ["Values", "Properties", "", "", "", ""],
  },
  {
    questionText: `You are extending an SAP Fiori app. Which of the extension properties are defined in the manifest.json?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "sap.ui.controllerExtensions",
      "sap.ui.viewModifications",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "sap.ui.modelModifications",
      "sap.ui.i18nModifications",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What content density is used for touch-enabled devices?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Cozy form factor", "", "", "", "", ""],
    wrongAns: [
      "Small form factor",
      "Compact form factor",
      "Desktop form factor",
      "Mobile form factor",
      "",
      "",
    ],
  },
  {
    questionText: `Your customer wants to enable the SAP Fiori app to be accessed in multiple languages. Which of the
    following activities do you perform?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "Create a resource file containing key/value pairs",
      "HTML -enable the special characters in the resource file",
      "Create a resource file for each language",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Create a view file and a controller file for each language",
      "Create a resource file with a .props extension",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `You need to implement an SAP Fiori transactional app for your customer. What benefits are
    available in the completed app?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "It allows UI changes without development privileges in the back-end",
      "It allows access to the back end to edit document details",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "It allows fast iterations for the UI apps",
      "It allows drill-down details to be presented in the UI",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which of the following components are part of the SAP Fiori launchpad?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "Shell Services",
      "UI2 services",
      "Shell container",
      "",
      "",
      "",
    ],
    wrongAns: ["Runtime container", "Runtime configuration", "", "", "", ""],
  },
  {
    questionText: `An administrator wants to configure the SAP Fiori Launchpad for all users in one client for
    your S/4HANA 1809 landscape. Which of the following options represents the best way for the
    administrator to do this?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Define settings using transaction /UI2/FLP_SYS CONF.",
      "Create a target mapping in a catalog and assign the catalog to all users using roles",
      "Define settings using transaction /UI2/FLP CUS CONF",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Use the configuration file to define URL parameters to enable/disable features when starting the SAP Fiori Launchpad.",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What SAPUI5 control is used as a starting point to implement the initial page?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["sap.m.Input", "", "", "", "", ""],
    wrongAns: ["sap.m.Select", "sap.m.Table", "sap.m.List", "", "", ""],
  },
  {
    questionText: `What are some of the core design principles of SAP Fiori?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Role-based", "Adaptive", "", "", "", ""],
    wrongAns: ["Accessibility", "Multi-device support", "", "", "", ""],
  },
  {
    questionText: `Why do you explore the Problem Space in detail during a Design Thinking workshop?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["To understand user needs", "", "", "", "", ""],
    wrongAns: [
      "To save costs in the evaluation phase",
      "To create desirable solutions",
      "To validate solution ideas",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `From what control does the sap.m.App control inherits the navigation capabilities?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["sap.m.NavContainer", "", "", "", "", ""],
    wrongAns: [
      "sap.ui.core.NavContainer",
      "sap.m.NavigationContainer",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What can you do by editing manifest.json?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Disable object page",
      "Add object pages as sub page under an object page",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Disable List Report",
      "Define facets on Object Page",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `In which cases, is a local annotation better than a CDS annotation?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Complex UI relevant annotations",
      "You want to use annotations which are not supported by your current ABAP version",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Annotations is for 1 field",
      "UI with data sensitive",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What are the two aggregations provided by the sap.m.SplitApp to add page implementation?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["detailPages", "masterPages", "", "", "", ""],
    wrongAns: ["infoPage", "detail", "mainPages", "", "", ""],
  },
  {
    questionText: `When do you select the custom plugins to build and package a hybrid app using the SAP HAT?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "During the Configure Path for Custom Plugins step of installing the SAP HAT",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "While creating a new project using the Hybrid Mobile Enablement feature",
      "During the Build the Hybrid Companion App step of installing the SAP HAT",
      "While configuring the app properties on the Hybrid App Configuration tab of the Web IDE Plugin",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `If your backend system is based on ABAP 7.50, which are available ways of using facets?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Declare both: field group and facet as local annotation using WebIDE",
      "Declare field group in CDS view, declare facets as local annotation using WebIDE",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "It is not possible to use facets in ABAP 7.50",
      "Declare both: field groups and facets in CDS view",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What are the tasks of the controller in the Model-View-Controller implementation?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Modifies the view via AP",
      "Modifies the model",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Contains the UI implementation",
      "Updates using data binding",
      "Holds the business data",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which of the following make up the configuration of a tile for launching an SAP fiori app of type SAP UI5
    in the SAP Fiori launchpad designer?`,
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Target Mapping",
      "Tile Implementation",
      "Semantic Object",
      "Tile Configuration",
      "",
      "",
    ],
    wrongAns: ["Launchpad creation via LPD_CUST", "", "", "", "", ""],
  },
  {
    questionText: `Which tool can you use to generate SAPUI5 coding that is based on prototypes?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["SAP WEB IDE", "", "", "", "", ""],
    wrongAns: ["SAP Build", "UI Theme Designer", "Adobe Flash", "", "", ""],
  },
  {
    questionText: `Which of the following annotations would you use for a List Report Page?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Use @UI.hidden annotation to hide the fields that are not to be displayed on a list report",
      "Use @UI.selectionField annotation to define a fuzzy search field",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Use @ULlineitem.importance annotation to determine in which devices the field is displayed.",
      "Use @Search.defaultSearchElement annotation to define input fields with value help",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What is an Aggregation?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Is a parent child relationship",
      "A relationship between two controls",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "A relationship between the text field and its labe",
      "Is not a parent/ child relationship",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What are the limitations of OPA5 test?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Testing across more than one page is NOT possible",
      "End-to-End tests are NOT recommended",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "It never causes a test to fail",
      "The developer needs to create the test during development",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Your customer requires an app to display flight information on a mobile device. Please see the
    screenshot for details.
    Which options can you use to display the same data in a readable format on a mobile device?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      'column:<Column demandPopin="true" minScreenWidth="tablet"></column>',
      `column:<Column demandPopin=”true” minScreenWidth=”tablet” popinDisplay=”Inline”></column>`,
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "column:<Column:demandPopin=”true” maxScreenWidth=”mobile”></column>",
      "column:<Column demandPopin=”true” maxScreenWidth=”mobile” popinDisplay=”Inline”></column>",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `You need the backend server to sort and filter the data used in your customer’s app. Which SAPUI5
    supported data model must you use?
    `,
    questionHint: "Please choose the correct answer.",
    correctAns: ["ODataModel", "", "", "", "", ""],
    wrongAns: ["JSONModel", "XMLModel", "ResourceModel", "", "", ""],
  },
  {
    questionText: `What are the main configuration objects of the routing configuration?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: ["targets", "routes", "config", "", "", ""],
    wrongAns: ["routing", "", "", "", "", ""],
  },
  {
    questionText: `Scenario: A developer is tasked with customizing the appearance and branding of the SAP Fiori
    Launchpad to align with the company's corporate identity.
    Which of the following tools or features would facilitate this customization?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: ["Launchpad Designer", "Theme Designer", "", "", "", ""],
    wrongAns: ["UI5 Inspector", "Role Editor", "", "", "", ""],
  },
  {
    questionText: `Which deployment options do you have for SAP Fiori UIs and OData Services regarding the software
    components? `,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "One deployment package on a different system from the business system",
      "One deployment package on the same system as the business system",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Two different deployment packages on the same system as the business system",
      "Two different deployment packages on a different from the business packages",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What are the options for external navigation?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Navigation to Intent (As a button)",
      "Navigation to URL (As a link)",
      "Navigation to Intent (As a link)",
      "",
      "",
      "",
    ],
    wrongAns: ["Navigation to URL (As a button)", "", "", "", "", ""],
  },
  {
    questionText: `Which of the following SmartControls provides visualizations like charts and graphs in SAP Fiori
    applications?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["SmartChart", "", "", "", "", ""],
    wrongAns: ["SmartFilterBar", "SmartForm", "SmartTable", "", "", ""],
  },
  {
    questionText: `What result do you expect from the de-composition and re-composition phases? `,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "A purpose-built app to support personas",
      "The prevention of irrelevant data being shown to the user",
      "The break-down of a large transaction",
      "",
      "",
      "",
    ],
    wrongAns: [
      "A responsive de-composed design",
      "An adaptive and coherent app",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What possible values can be used for the annotation @UI.LineItem.importance?`,
    questionHint: "There are 3 correct answers to this question. ",
    correctAns: ["LOW", "MEDIUM", "HIGH", "", "", ""],
    wrongAns: ["VERY_HIGH", "", "", "", "", ""],
  },
  {
    questionText: `Your customer extends an SAP Fiori app with View Replacement. Which activities do you perform?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Create an SAPUI5 view that replaces the complete view",
      "Verify that adding custom content in the Extension Points will NOT suffice",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Create an SAPUI5 control that replaces the original control",
      "Identify a specific SAPUI5 control to be replaced",
      "",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which of the following layouts, are described in v1.48 of guidelines?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Flexible column layout", "Dynamic page", "", "", "", ""],
    wrongAns: [
      "Split-screen",
      "Full-screen",
      "Mobile device layout",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `Which properties do you need to configure when you use the Mock server?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Service Url", "Module path", "", "", "", ""],
    wrongAns: ["Binding type", "Destination", "", "", "", ""],
  },
  {
    questionText: `Which of the following information about an OData service should be provided as an annotation?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "The position for each field in a list report",
      "",
      "",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Data type for each property in an Entity Set / Connection",
      "Properties of an Entity Set / Connection",
      "The entities of an OData service",
      "",
      "",
      "",
    ],
  },
  {
    questionText: `What steps are part of the design phase (Solution Space) in the DLD`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Ideate", "Validate", "Prototype", "", "", ""],
    wrongAns: ["Scope", "Test", "", "", "", ""],
  },
  {
    questionText: `You develop an SAPUI5 app that updates data on the SAP back-end system. What activities are required
    when you implement an XSRF token?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Retrieve the token and send it with each service request",
      "",
      "Execute the Refresh method for an expired token",
      "",
      "",
      "",
    ],
    wrongAns: [
      "Include the token in the HTTP request body of each write request",
      "",
      "Generate a token on each read and write request",
      "",
      "",
      "",
    ],
  },
];
