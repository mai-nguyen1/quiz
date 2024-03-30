const uniqueQuestions = [
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
    ],
    wrongAns: ["Provides multiple search fields"],
  },
  {
    questionText: "What is the purpose of build server?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Provides software that allows continuous integration"],
    wrongAns: [
      "Used for version control",
      "Manage components build artifacts, and releases candidates in one central location",
      "Used for code review",
    ],
  },
  {
    questionText: "What OData versions are currently supported by SAPUI5?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["OData V2", "OData V4"],
    wrongAns: ["OData V7", "OData V5"],
  },
  {
    questionText: "SAP Business Application Studio is primarily used for...",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Developing and deploying business applications"],
    wrongAns: [
      "Database administration",
      "Monitoring network traffic",
      "Designing Fiori user interfaces",
    ],
  },
  {
    questionText:
      "Which technologies are used to create Hybrid apps and SAPUI5 apps?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["HTML5, JavaScript and CSS"],
    wrongAns: [
      "XML, JavaScript and CSS3",
      "XML, JSON and CSS",
      "HTML, JSON and CSS3",
    ],
  },
  {
    questionText:
      "Scenario: A developer is tasked with creating a dashboard that provides a quick overview of key performance indicators (KPIs) for a logistics company\n Which SAP Fiori Element would be most suitable for this purpose?",
    questionHint: "There are 3 correct answers to this question",
    correctAns: ["List Report", "Overview Page", "Analytical List Page"],
    wrongAns: ["Object Page", "Worklist"],
  },
  {
    questionText:
      "How can you hide some columns when the list report is accessed by a mobile phone?",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Set UI.lineItem importance for those fields as #LOW or #MEDIUM",
    ],
    wrongAns: [
      "Prepare different version of @UI.lineitem and assign them as different qualifier",
      "Put all fields, which are not important at the end of the report, when screen gets smaller, the fields will hide automatically",
      "Add @UI.hidden for fields, not import",
    ],
  },
  {
    questionText:
      "What is the main benefit to using predefined CSS margin/padding classes of SAPUI5?",
    questionHint: "Please choose the correct answer",
    correctAns: ["Consistent spacing"],
    wrongAns: ["Consistent width", "Consistent borders", "Consistent height"],
  },
  {
    questionText:
      "You want to use transaction /UI2/FLP to start the SAP Fiori Launchpad using the Web Dispatcher. Which database table do you use to configure this?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["HTTPURLLOC"],
    wrongAns: ["HTTP_MADMIM", "HTTP_WHITELIST", "HTTP_CSP_MADMIN"],
  },
  {
    questionText:
      "You need the server to sort and filter the data used in your customer’s app. Which SAPUI5-supported data model must you use",
    questionHint: "Please choose the correct answer",
    correctAns: ["ODataModel"],
    wrongAns: ["ResourceModel", "JSONModel", "XMLModel"],
  },
  {
    questionText: "What is the usage of Object Model annotations",
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Annotation for structured and transactional aspects of the data model",
    ],
    wrongAns: [
      "Annotation for the consumption layer",
      "UI-relevant annotations used SAP Fiori elements",
      "Semantic annotation for fields of the result set",
    ],
  },
  {
    questionText:
      "You need to strengthen the connection security between the Web IDE and the Hybrid App Toolkit Connector. Which of the following activities do you perform?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Replace the default API key"],
    wrongAns: [
      "Install an X.509 certificate",
      "Change the default port number",
      "Run the connector with administrator rights",
    ],
  },
  {
    questionText:
      "In the context of SAP Fiori deployment, what is the primary purpose of transport requests?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Transporting changes between systems"],
    wrongAns: [
      "Debugging applications",
      "Testing applications",
      "Monitoring application performance",
    ],
  },
  {
    questionText: "What are Technical Catalogs used for",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "As a reference for Business Catalogs",
      "To store tiles and target mappings by technology per solution area",
    ],
    wrongAns: [
      "To reference tiles and target mappings according to Segregation of Duties for example a Purchaser, a Buyer and so on",
      "As a reference for Business Groups",
    ],
  },
  {
    questionText:
      "For which operations will the SAP Gateway server compute and return a new ETag in a response header?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["PUT", "POST"],
    wrongAns: ["DELETE", "GET"],
  },
  {
    questionText:
      `Scenario: An e-commerce company is developing an SAPUI5 application to manage customer orders. The application needs to handle large datasets and ensure efficient data retrieval.
      Which of the following OData features would be essential for this purpose?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Filtering", "Batch operations", "Pagination"],
    wrongAns: ["Sorting", "Aggregation"],
  },
  {
    questionText:
      "What happens if the text is not available in the customized bundle of your extension?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "SAPUI5 tries to find the text in the resource bundle of the standard application.",
    ],
    wrongAns: [
      "An exception is raised",
      "No text is displayed",
      "The key will display in the application in capital letters.",
    ],
  },
  {
    questionText:
      "In the SAP Fiori Launchpad, which component serves as a container that holds one or more tiles or links?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Group"],
    wrongAns: ["Catalog", "Tile", "Role"],
  },
  {
    questionText:
      "What are the basic guidelines of the Extension Point concept of SAPUI5?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "The custom app and the parent app contain a component.js file",
      "The custom app is located in a separate project",
    ],
    wrongAns: [
      "The parent app contains all modifications",
      "The custom app remains modification free",
    ],
  },
  {
    questionText:
      "Which of the following types are types of cards in an Overview Page?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Analytic Cards",
      "List Cards",
      "Link List Cards",
      "Table Cards",
    ],
    wrongAns: ["Array Cards"],
  },
  {
    questionText:
      "In SAPUI5, which feature allows for the automatic update of the UI when the underlying model data changes?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Two-way Data Binding"],
    wrongAns: ["Static Binding", "Direct Data Access", "One-way Data Binding"],
  },
  {
    questionText:
      "Which of the following is NOT a key capability of the SAP BTP Integration Suite?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Application extension"],
    wrongAns: ["API management", "Process integration", "Data intelligence"],
  },
  {
    questionText:
      "Which of the following components in the SAP Fiori architecture is responsible for defining the data model and business logic for SAP Fiori apps?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Back-end server"],
    wrongAns: ["Gateway server", "OData service", "Front-end server"],
  },
  {
    questionText:
      "Which of the following best describes the primary purpose of the SAP Business Technology Platform (SAP BTP)?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "An integrated environment for application development, integration, and analytics",
    ],
    wrongAns: [
      "A user interface design tool",
      "A platform for integrating third-party applications",
      "A database management system",
    ],
  },
  {
    questionText:
      "Which element in the SAPUI5 architecture holds the data in JSON or XML?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Model"],
    wrongAns: ["Controller", "Component", "View"],
  },
  {
    questionText:
      "You develop an SAPUI5 app and implement a FacetFilter. What events are triggered when the user\n    interacts with the FactFilter control?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["confirm", "reset"],
    wrongAns: ["oninit", "listFilter"],
  },
  {
    questionText:
      "Which information is included in the SAPUI5 app’s manifest.json file?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAPUI5 dependencies",
      "Referenced data sources",
      "App ID, Name and version",
    ],
    wrongAns: ["Client side data-models", "Localization keys"],
  },
  {
    questionText:
      "Scenario: A company wants to customize the look and feel of their SAP Fiori apps to align with their\n    branding guidelines. Which component of the SAP Fiori architecture would facilitate this customization?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Theme Designer", "SAPUI5 library"],
    wrongAns: ["SAP Fiori Launchpad", "SAP Fiori Designer"],
  },
  {
    questionText:
      "Which of the following extensibility options in SAPUI5 allows developers to add or replace views,\n    controllers, or other application files?",
    questionHint: "Please choose the correct answer",
    correctAns: ["Extension Points"],
    wrongAns: ["Component Variants", "Custom Controls", "UI Controller Hooks"],
  },
  {
    questionText:
      "Which properties are part of the design phase when you develop SAP Fiori apps?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Ideation, Prototyping and Validation"],
    wrongAns: [
      "Developing, Testing and Deploying",
      "Scoping, 360 degree research and Synthesis",
      "Requirement gathering, Research and Documentation",
    ],
  },
  {
    questionText:
      "You want to create a business catalog for all employees that contains a standard SAP Fiori app. How\n    would you do this?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Reference the tile from a Technical Catalog provided by SAP"],
    wrongAns: [
      "Reference the tile from a SAP Business Catalog",
      "Reference the tile from a SAP Business Group",
      "Reference the tile from Odata metadata",
    ],
  },
  {
    questionText:
      "Which of the following tools in SAP Fiori is primarily used for automated testing of applications?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Fiori Test Recorder"],
    wrongAns: [
      "SAP Fiori Inspector",
      "SAP Fiori Monitor",
      "SAP Fiori Debugger",
    ],
  },
  {
    questionText:
      "Which aspects should be considered in deciding which layout template to use?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "You need to consider what the user wants to achieve when working in the app",
      "It is helpful to answer questions on the nature of tasks",
    ],
    wrongAns: [
      "You need to consider which browser type is used",
      "You need to analyze what end device the app is executed on",
      "You need to analyze the capabilities of the user",
    ],
  },
  {
    questionText: "Which model supports deep inserts?",
    questionHint: "Please choose the correct answer",
    correctAns: ["OData model"],
    wrongAns: ["XML model", "Resource model", "JSON model"],
  },
  {
    questionText:
      "For which app type in SAP Fiori do you install the KPI framework?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Analytical app"],
    wrongAns: ["Transactional app", "Factsheet app", "Legacy app"],
  },
  {
    questionText:
      "To perform a QUnit test, what do you include in a test page under your webapp folder?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAPUI5 bootstrap code"],
    wrongAns: ["OPA function", "Mock code", "Stub code"],
  },
  {
    questionText: "What is Apache Cordova?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["An open source mobile development framework"],
    wrongAns: [
      "API provided by SAP to access mobile device features",
      "A cloud service to access data from mobile devices",
      "SAP product to run SAP Fiori applications on mobile device",
    ],
  },
  {
    questionText:
      "Your customer wants to extend an SAP Fiori app through a Controller Extension. When can a controller\n    extension lead to a crash?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "If the original code required to run the application is overwritten.",
      "If the extension code accesses parts of the original application that were removed",
    ],
    wrongAns: [
      "If the extension code exists in the extended app but the controller name is changed by an app update",
      "If the extension code exists and is NOT referenced in the original view.",
    ],
  },
  {
    questionText:
      "What makes a standard UI control to be named as a complex control?    ",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Aggregations", "Associations"],
    wrongAns: ["Values", "Properties"],
  },
  {
    questionText:
      "You are extending an SAP Fiori app. Which of the extension properties are defined in the manifest.json?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["sap.ui.viewModifications", "sap.ui.controllerExtensions"],
    wrongAns: ["sap.ui.modelModifications", "sap.ui.i18nModifications"],
  },
  {
    questionText: "What content density is used for touch-enabled devices?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Cozy form factor"],
    wrongAns: [
      "Small form factor",
      "Compact form factor",
      "Desktop form factor",
      "Mobile form factor",
    ],
  },
  {
    questionText:
      "You need to implement an SAP Fiori transactional app for your customer. What benefits are\n    available in the completed app?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "It allows UI changes without development privileges in the back-end",
      "It allows access to the back end to edit document details",
    ],
    wrongAns: [
      "It allows fast iterations for the UI apps",
      "It allows drill-down details to be presented in the UI",
    ],
  },
  {
    questionText:
      "Which of the following components are part of the SAP Fiori launchpad?",
    questionHint: "There are 3 correct answers to this question",
    correctAns: ["Shell Services", "UI2 services", "Shell container"],
    wrongAns: ["Runtime container", "Runtime configuration"],
  },
  {
    questionText:
      "An administrator wants to configure the SAP Fiori Launchpad for all users in one client for\n    your S/4HANA 1809 landscape. Which of the following options represents the best way for the\n    administrator to do this?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Define settings using transaction /UI2/FLP_SYS CONF.",
      "Create a target mapping in a catalog and assign the catalog to all users using roles",
      "Define settings using transaction /UI2/FLP CUS CONF",
    ],
    wrongAns: [
      "Use the configuration file to define URL parameters to enable/disable features when starting the SAP Fiori Launchpad.",
    ],
  },
  {
    questionText:
      "What SAPUI5 control is used as a starting point to implement the initial page?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["sap.m.Input"],
    wrongAns: ["sap.m.List", "sap.m.Select", "sap.m.Table"],
  },
  {
    questionText: "What are some of the core design principles of SAP Fiori?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Adaptive", "Role-based"],
    wrongAns: ["Accessibility", "Multi-device support"],
  },
  {
    questionText:
      "Why do you explore the Problem Space in detail during a Design Thinking workshop?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["To understand user needs"],
    wrongAns: [
      "To save costs in the evaluation phase",
      "To create desirable solutions",
      "To validate solution ideas",
    ],
  },
  {
    questionText:
      "From what control does the sap.m.App control inherits the navigation capabilities?",
    questionHint: "Please choose the correct answer",
    correctAns: ["sap.m.NavContainer"],
    wrongAns: ["sap.ui.core.NavContainer", "sap.m.NavigationContainer"],
  },
  {
    questionText: "What can you do by editing manifest.json?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Add object pages as sub page under an object page",
      "Disable object page",
    ],
    wrongAns: ["Disable List Report", "Define facets on Object Page"],
  },
  {
    questionText:
      "In which cases, is a local annotation better than a CDS annotation?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Complex UI relevant annotations",
      "You want to use annotations which are not supported by your current ABAP version",
    ],
    wrongAns: ["Annotations is for 1 field", "UI with data sensitive"],
  },
  {
    questionText:
      "What are the two aggregations provided by the sap.m.SplitApp to add page implementation?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["masterPages", "detailPages"],
    wrongAns: ["detail", "infoPage", "mainPages"],
  },
  {
    questionText:
      "When do you select the custom plugins to build and package a hybrid app using the SAP HAT?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "During the Configure Path for Custom Plugins step of installing the SAP HAT",
    ],
    wrongAns: [
      "During the Build the Hybrid Companion App step of installing the SAP HAT",
      "While configuring the app properties on the Hybrid App Configuration tab of the Web IDE Plugin",
      "While creating a new project using the Hybrid Mobile Enablement feature",
    ],
  },
  {
    questionText:
      "If your backend system is based on ABAP 7.50, which are available ways of using facets?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Declare field group in CDS view, declare facets as local annotation using WebIDE",
      "Declare both: field group and facet as local annotation using WebIDE",
    ],
    wrongAns: [
      "Declare both: field groups and facets in CDS view",
      "It is not possible to use facets in ABAP 7.50",
    ],
  },
  {
    questionText:
      "What are the tasks of the controller in the Model-View-Controller implementation?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Modifies the view via AP", "Modifies the model"],
    wrongAns: [
      "Contains the UI implementation",
      "Updates using data binding",
      "Holds the business data",
    ],
  },
  {
    questionText:
      "Which of the following make up the configuration of a tile for launching an SAP fiori app of type SAP UI5\n    in the SAP Fiori launchpad designer?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Target Mapping",
      "Tile Implementation",
      "Semantic Object",
      "Tile Configuration",
    ],
    wrongAns: ["Launchpad creation via LPD_CUST"],
  },
  {
    questionText:
      "Which tool can you use to generate SAPUI5 coding that is based on prototypes?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP WEB IDE"],
    wrongAns: ["SAP Build", "Adobe Flash", "UI Theme Designer"],
  },
  {
    questionText:
      "Which of the following annotations would you use for a List Report Page?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Use @UI.hidden annotation to hide the fields that are not to be displayed on a list report.",
      "Use @UI.selectionField annotation to define a fuzzy search field.",
    ],
    wrongAns: [
      "Use @ULlineitem.importance annotation to determine in which devices the field is displayed.",
      "Use @Search.defaultSearchElement annotation to define input fields with value help.",
    ],
  },
  {
    questionText: "What is an Aggregation?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Is a parent child relationship",
      "A relationship between two controls",
    ],
    wrongAns: [
      "A relationship between the text field and its labe",
      "Is not a parent/ child relationship",
    ],
  },
  {
    questionText: "What are the limitations of OPA5 test?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Testing across more than one page is NOT possible",
      "End-to-End tests are NOT recommended",
    ],
    wrongAns: [
      "It never causes a test to fail",
      "The developer needs to create the test during development",
    ],
  },
  {
    questionText:
      "Your customer requires an app to display flight information on a mobile device. Please see the\n    screenshot for details.\n    Which options can you use to display the same data in a readable format on a mobile device?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      'column:<Column demandPopin="true" minScreenWidth="tablet"></column>',
      "column:<Column demandPopin=”true” minScreenWidth=”tablet” popinDisplay=”Inline”></column>",
    ],
    wrongAns: [
      "column:<Column:demandPopin=”true” maxScreenWidth=”mobile”></column>",
      "column:<Column demandPopin=”true” maxScreenWidth=”mobile” popinDisplay=”Inline”></column>",
    ],
  },
  {
    questionText:
      "You need the backend server to sort and filter the data used in your customer’s app. Which SAPUI5\n    supported data model must you use?\n    ",
    questionHint: "Please choose the correct answer.",
    correctAns: ["ODataModel"],
    wrongAns: ["JSONModel", "XMLModel", "ResourceModel"],
  },
  {
    questionText:
      "What are the main configuration objects of the routing configuration?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["config", "targets", "routes"],
    wrongAns: ["routing"],
  },
  {
    questionText:
      "Scenario: A developer is tasked with customizing the appearance and branding of the SAP Fiori\n    Launchpad to align with the company's corporate identity.\n    Which of the following tools or features would facilitate this customization?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: ["Launchpad Designer", "Theme Designer"],
    wrongAns: ["UI5 Inspector", "Role Editor"],
  },
  {
    questionText:
      "Which deployment options do you have for SAP Fiori UIs and OData Services regarding the software\n    components? ",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "One deployment package on a different system from the business system",
      "One deployment package on the same system as the business system",
    ],
    wrongAns: [
      "Two different deployment packages on the same system as the business system",
      "Two different deployment packages on a different from the business packages",
    ],
  },
  {
    questionText: "What are the options for external navigation?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Navigation to Intent (As a button)",
      "Navigation to URL (As a link)",
      "Navigation to Intent (As a link)",
    ],
    wrongAns: ["Navigation to URL (As a button)"],
  },
  {
    questionText:
      "Which of the following SmartControls provides visualizations like charts and graphs in SAP Fiori\n    applications?",
    questionHint: "Please choose the correct answer",
    correctAns: ["SmartChart"],
    wrongAns: ["SmartFilterBar", "SmartForm", "SmartTable"],
  },
  {
    questionText:
      "What result do you expect from the de-composition and re-composition phases?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "A purpose-built app to support personas",
      "The prevention of irrelevant data being shown to the user",
      "The break-down of a large transaction",
    ],
    wrongAns: [
      "A responsive de-composed design",
      "An adaptive and coherent app",
    ],
  },
  {
    questionText:
      "What possible values can be used for the annotation @UI.LineItem.importance?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["MEDIUM", "LOW", "HIGH"],
    wrongAns: ["VERY_HIGH"],
  },
  {
    questionText:
      "Your customer extends an SAP Fiori app with View Replacement. Which activities do you perform?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Create an SAPUI5 view that replaces the complete view",
      "Verify that adding custom content in the Extension Points will NOT suffice",
    ],
    wrongAns: [
      "Create an SAPUI5 control that replaces the original control",
      "Identify a specific SAPUI5 control to be replaced",
    ],
  },
  {
    questionText:
      "Which of the following layouts, are described in v1.48 of guidelines?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Flexible column layout", "Dynamic page"],
    wrongAns: ["Split-screen", "Full-screen", "Mobile device layout"],
  },
  {
    questionText:
      "Which properties do you need to configure when you use the Mock server?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Service Url", "Module path"],
    wrongAns: ["Binding type", "Destination"],
  },
  {
    questionText:
      "Which of the following information about an OData service should be provided as an annotation?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["The position for each field in a list report"],
    wrongAns: [
      "Data type for each property in an Entity Set / Connection",
      "Properties of an Entity Set / Connection",
      "The entities of an OData service",
    ],
  },
  {
    questionText:
      "What steps are part of the design phase (Solution Space) in the DLD",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Ideate", "Validate", "Prototype"],
    wrongAns: ["Scope", "Test"],
  },
  {
    questionText:
      "You develop an SAPUI5 app that updates data on the SAP back-end system. What activities are required\n    when you implement an XSRF token?",
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "Retrieve the token and send it with each service request",

      "Execute the Refresh method for an expired token",
    ],
    wrongAns: [
      "Include the token in the HTTP request body of each write request",

      "Generate a token on each read and write request",
    ],
  },
  {
    questionText:
      "Which of the following components in the SAP Fiori architecture is responsible for handling user requests and rendering the user interface?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Front-end server"],
    wrongAns: ["OData service", "Database server", "Back-end server"],
  },
  {
    questionText:
      "You need to maintain the mapping between an app URL and a destination in the SAPUI5 app. Which file do you maintain?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["neo-app.json"],
    wrongAns: ["user-project.json", "project.json", "path.json"],
  },
  {
    questionText:
      "What is the purpose of the Logon Plugin Data Vault of the SAP Fiori Client?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Provide a reusable component for storing sensitive information on the device",
    ],
    wrongAns: [
      "Enable secure and seamless handling of attachments",
      "Allow a client policy that can be defined on the mobility platform",
      "Prevent the access to all nonessential plugins",
    ],
  },
  {
    questionText: "What are the two components of the OData Runtime?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["GW_CORE", "IW_FND"],
    wrongAns: ["IW_HANA", "IW_BEP"],
  },
  {
    questionText:
      "What layout control is used to achieve flexible and responsible layouts?",
    questionHint: "_",
    correctAns: ["Grid"],
    wrongAns: ["VerticalLayout", "VerticalLayout", "Splitter"],
  },
  {
    questionText: "What are the current UI Technologies of SAP?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Dynpro", "Web Dynpro ABAP / Floorplan Manager", "SAPUI5"],
    wrongAns: ["Business Server Pages", "Java Server Pages"],
  },
  {
    questionText:
      "What goals are achieved by a Lean Development Infrastructure?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Allows for faster innovation through independently released and serial versions of components",
      "Either automates or provides self-service response",
    ],
    wrongAns: [
      "Used for ABAP development with Eclipse oxygent",
      "Used to increate the development effort",
    ],
  },
  {
    questionText:
      "Your customer asks you to demonstrate their app with localization changes. Which activity do you\nperform?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Show the i18n.properties file translations"],
    wrongAns: [
      "Enable the preview frame in the run configuration",
      "Configure the run configuration file in the app",
      "Configure the Supported Languages settings in the Project.json file",
    ],
  },
  {
    questionText:
      "Scenario: A developer is creating an application that allows users to filter and search for products based\non multiple criteria. Which SmartControl would be most suitable for this purpose?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["SmartForm", "SmartTable", "SmartFilterBar"],
    wrongAns: ["SmartLink", "SmartChart"],
  },
  {
    questionText:
      "In SAPUI5, which component provides a structured way to create web applications and ensures a\nconsistent app structure?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["MVC (Model-View-Controller)"],
    wrongAns: ["OData Protocol", "JSON Model", "XML Fragments"],
  },
  {
    questionText:
      "Which of the following pattern sequences are the QUnit tests based on?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Arrange, Act, and Assert"],
    wrongAns: [
      "Given, When, and Then",
      "Given, Then, and When",
      "Assert, Act, and Arrange",
    ],
  },
  {
    questionText:
      "Which of the following extensibility options in SAPUI5 allows for the addition of custom XML fragments\nto views?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Fragment Extensions"],
    wrongAns: ["Custom Controls", "UI Controller Hooks", "Extension Points"],
  },
  {
    questionText:
      "You are an administrator for your S/4HANA 1809 landscape. You want to disable personalization and\nthemes on the SAP Fiori Launchpad for select users in one client. How can you do this?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Create a new catalog referencing /UI2/CONFIG_PERS_OFF and assign it to the users by a PFCG role.",
    ],
    wrongAns: [
      "Create a new catalog referencing /UI2/CONFIG_PERS_ON, adjusting the relevant parameter in the target mapping, and assign it to the users by a PFCG role.",
      "Create a new catalog referencing /UI2/CONFIG_SYS_CONF and assign it to the users by a PFCG role.",
      "Create a new catalog referencing /UI2/CONFIG_CUS_CONF and assign it to the users by a PFCG role.",
    ],
  },
  {
    questionText:
      "What is the purpose of the neo-app.json file located in the project root folder of your SAP Web IDE\nproject?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "It contains the mapping between an application URL and a destination configured in the SAP Cloud Platform.",
    ],
    wrongAns: [
      "It contains the mapping configuration of the front-end and back-end server URLs.",
      "It contains the OData service configuration parameters used at runtime.",
      "It contains the configuration for the mock server.",
    ],
  },
  {
    questionText:
      "Which tile types can you use to display real-time data values read from an OData service?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["KPI based tile", "App Launcher – Dynamic tile"],
    wrongAns: ["App Launcher – Static tile", "News tile"],
  },
  {
    questionText:
      "Which file can you use to configure internal navigation for List Report and Object Page templates?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["manifest.json file"],
    wrongAns: [
      "OData annotation file",
      "index.html file",
      "vocabulary.xml file",
    ],
  },
  {
    questionText:
      "What is true of the SAP Cloud Platform Web IDE for full-stack development?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "It requires zero installation",
      "There are twice weekly updates",
    ],
    wrongAns: [
      "It is included with SAP HANA express edition",
      "It is released with SAP HANA SPS's",
    ],
  },
  {
    questionText:
      "In the source code below, which of the following locations must reference the extension point?\n<code:View xmlns:core=”sap.ui.core” xmlns:mvc=”sap.ui.core.mvc” xmlns=”sap.m”\ncontrollerName=”appextension.EmployeeData” xmlns:html=http://www.w3.org/1999/xhtml>\n<Page title=”Title”>\n<content>\n<Label text = “First name:”/>\n<Input/>\n<core:ExtensionPoint name=”forMiddleName:”/>\n<Label text = “Last name:”/>\n<Input/>\n<Button text=”Get Info” press=”doGetInfo”/>\n</content>\n</Page>\n</core:View>",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Component.js"],
    wrongAns: [
      "EmployeeData.view.xml",
      "EmployeeDate.controller.js",
      "Neo-app.json",
    ],
  },
  {
    questionText:
      "Which of the following statements are talking about the SAP Fiori app architecture?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "SAP Fiori apps need to have an app descriptor that describes the applications metadata",
      "SAP Fiori apps are implemented using the component-based approach",
    ],
    wrongAns: [
      "SAP Fiori apps have a index.html file that is used for SAP Fiori launchpad integration",
      "SAP Fiori apps should use the SAPUI5 core as a place to hold app data models",
    ],
  },
  {
    questionText:
      "Which of the following is NOT a standard CRUD operation supported by OData?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Merge"],
    wrongAns: ["Update", "Retrieve", "Create"],
  },
  {
    questionText:
      "What do you configure to import the BUILD prototype in the SAP Web IDE for development?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["The destination in the SAP HANA Cloud Platform"],
    wrongAns: [
      "The connection in the SAP HANA Cloud Integration",
      "The connection in the SAP HANA Cloud Connector",
      "The API key in the SAP Web IDE plugin",
    ],
  },
  {
    questionText:
      "In SAP Fiori, which tool is specifically designed to inspect UI elements and their properties during\nruntime?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Fiori Inspector"],
    wrongAns: [
      "SAP Fiori Debugger",
      "SAP Fiori Test Recorder",
      "SAP Fiori Performance Analyzer",
    ],
  },
  {
    questionText:
      "Which of the following tools in SAP Fiori provides insights into runtime errors and issues during\napplication execution?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Fiori Debugger"],
    wrongAns: [
      "SAP Fiori Performance Analyzer",
      "SAP Fiori Inspector",
      "SAP Fiori Test Recorder",
    ],
  },
  {
    questionText:
      "Scenario: A developer is tasked with creating a custom UI element that can be reused across multiple\nSAPUI5 applications. This UI element has unique properties and behaviors not available in standard\ncontrols.\nWhich extensibility approach should the developer use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Custom Controls"],
    wrongAns: ["Component Variants", "Extension Points", "UI Controller Hooks"],
  },
  {
    questionText:
      "Scenario: A developer is creating an SAP Fiori application that fetches data from an SAP S/4HANA\nsystem. The application needs to retrieve, update, and delete records in real-time.\nWhich of the following would be the most suitable approach for this data handling?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Use of OData services", "Integration with SAP BTP"],
    wrongAns: ["Direct database queries", "Use of JSON models"],
  },
  {
    questionText: "What activity does the QUnit Stub functionality perform?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Provides parameters and return values for method calls"],
    wrongAns: [
      "Supplies parameter for method calls",
      "Verifies that expected methods are called correctly",
      "Returns values for method calls",
    ],
  },
  {
    questionText:
      "In the code on the screenshot, what is the absolute path of the property to retrieve the City value for the\ncompany Acme Inc?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["/regions/0/companies/0/city"],
    wrongAns: [
      "/regions/companies/1/city",
      "/regions/1/companies/1/city",
      "/regions/companies/0/city",
    ],
  },
  {
    questionText:
      "In OData, which of the following is used to define the structure and capabilities of an OData service?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Service Metadata"],
    wrongAns: [
      "Entity Data Model (EDM)",
      "Service Document",
      "Data Service Layer (DSL)",
    ],
  },
  {
    questionText:
      "Scenario: A developer is tasked with creating an SAPUI5 application that allows users to interactively\nfilter and sort a large dataset. Which of the following features of SAPUI5 would be most suitable for this\npurpose?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Use of Standard Controls",
      "Integration with OData Service",
      "Data Binding",
    ],
    wrongAns: ["Use of Custom Controls", "Fragment Loading"],
  },
  {
    questionText: "What are common design thinking brainstorming rules?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Fail early and often", "Be visual"],
    wrongAns: ["Discuss and judge every idea", "Go for quality"],
  },
  {
    questionText: "What is the use of the annotation @UI.hidden?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Prevent a column selected by user when customizing table settings",
    ],
    wrongAns: [
      "Create a invisible column to save the value in a hidden control of HTML",
      "Not expose these fields as a property of OData service",
      "Prevent a column from display on the UI",
    ],
  },
  {
    questionText:
      "Which dependent plugin must you enable to include the Push plugin when you create a hybrid mobile app?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Dialog Notification"],
    wrongAns: ["Network Connection", "App Update", "Logon Manager"],
  },
  {
    questionText:
      "Which file is referred to as the App Descriptor and what is its function?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "The manifest.json file is referred to as App Descriptor Its function is to instantiate the model",
    ],
    wrongAns: [
      "The neo.json file is referred to as App Descriptor Its function is to capture data from objects",
      "The configure.xml file is referred to as App Descriptor Its function is to configure web apps and turn\n      on plug-ins",
      "The config-json file is referred to as App Descriptor Its function is to configure ports and turn on\n      plug-ins",
    ],
  },
  {
    questionText: "What are the advantages of the Sinon.JS framework?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "It supplies higher level test doubles for timers and AJAX requests",
      "It provides support for Spies, stubs and mocks",
    ],
    wrongAns: [
      "It enables test-driven development",
      "It can be used with any JavaScript unit test framework",
    ],
  },
  {
    questionText:
      "Which types are supported as header facets for an object page?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Plan Text Facet",
      "Rating Indicator Facet",
      "Field Group Facet",
    ],
    wrongAns: ["Smart Chart Facet"],
  },
  {
    questionText:
      "In the context of OData, which HTTP method is used to retrieve data from a service?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["GET"],
    wrongAns: ["POST", "DELETE", "PUT"],
  },
  {
    questionText:
      "Scenario: A company wants to ensure that only the HR department has access to certain apps in the SAP\nFiori Launchpad. Which of the following would be used to achieve this requirement?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Roles", "Catalogs"],
    wrongAns: ["Groups", "Tiles"],
  },
  {
    questionText: "What is the purpose of the SAP HANA Cloud connector?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "It connects the services of the SAP HANA Cloud Platform and on-premise system in the customer’s network",
    ],
    wrongAns: [
      "It lists the search components and corresponding search models needed for the app",
      "It allows the SAP Web IDE to connect to the on-premise system’s Cordova development environment",
      "It connects the services of the SAP HANA Cloud Platform and SAP Web IDE",
    ],
  },
  {
    questionText: "When is the use of a master-detail-pattern not recommended?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "When you want to display different facets of the same object/data",
      "You need to offer complex filters for the list of items",
    ],
    wrongAns: ["You want to display a single object"],
  },
  {
    questionText:
      "You are creating KPI Design or KPI Modeler Apps using the SAP KPI Framework. Which of the following\nsequences is the correct one for this?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Create Evaluation, Create Tile, Create KPI, Manage KPI Associations, Configure Drill-Down",
    ],
    wrongAns: [
      "Create KPI, Configure Drill-Down, Create Evaluation, Create Tile, Manage KPI Associations",
      "Create KPI, Create Evaluation, Create Tile, Configure Drill-Down, Manage KPI Associations",
      "Create Tile, Create KPI, Create Evaluation, Configure Drill-Down, Manage KPI Associations",
    ],
  },
  {
    questionText:
      "Which of the following properties are relevant to the type of facet?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["purpose", "type"],
    wrongAns: ["targetQualifier", "parentId"],
  },
  {
    questionText:
      "Scenario: A company wants to customize the look and feel of their SAP Fiori apps to align with their branding guidelines. Which component of the SAP Fiori architecture would facilitate this customization?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Theme Designer", "SAPUI5 library"],
    wrongAns: ["SAP Fiori Designer", "SAP Fiori Launchpad"],
  },
  {
    questionText:
      "What transaction is used to create an semantic object for customer configuration?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["/UI2/SEMOBJ"],
    wrongAns: ["PFCG", "/UI5/LPD_CUST", "SU01", "/UI5/SEMOBJ"],
  },
  {
    questionText: "Which tool do you use to deploy SAP Fiori app developments?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP WEB IDE"],
    wrongAns: [
      "Object Navigator",
      "Process Modeler",
      "Eclipse (SAP NetWeaver Developer Studio)",
    ],
  },
  {
    questionText:
      "What main aspects does the developer have to configure for a sap.viz.ui5.controls.VizFrame control?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: ["DimensionDefinition", "Feed", "MeasureDefinition", "Dataset"],
    wrongAns: ["Datacontainer"],
  },
  {
    questionText:
      "Which SAP Fiori personalization elements holds all of the technical information needed to start an app?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Tile"],
    wrongAns: ["Catalog", "User Preferences", "Group"],
  },
  {
    questionText:
      "Which of the following SmartControls in SAP Fiori provides a table with advanced features like variant management and personalization?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SmartTable"],
    wrongAns: ["SmartLink", "SmartFilterBar", "SmartForm"],
  },
  {
    questionText:
      "What result do you expect from the de-composition and re-composition phases?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "A purpose-built app to support personas",
      "The break-down of a large transaction",
      "The prevention of irrelevant data being shown to the user",
    ],
    wrongAns: [
      "A responsive de-composed design",
      "An adaptive and coherent app",
    ],
  },
  {
    questionText: "When do you not use the overview page floorplan?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "You just represent one application and less than three cards.",
      "A high-level or birds-eye view of an application content is sufficient.",
      "You want to show information about one object only. In this case, use the object page instead.",
    ],
    wrongAns: [
      "You want to display a collection of items and process them or delegate them to someone else.",
    ],
  },
  {
    questionText:
      "In the context of SAPUI5 extensibility, what is the primary advantage of using Custom Controls?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "They provide a way to create reusable UI elements with custom behavior and properties.",
    ],
    wrongAns: [
      "They allow direct modification of standard applications.",
      "They enable the addition of custom logic to standard controllers.",
      "They allow the replacement of entire views in an application.",
    ],
  },
  {
    questionText:
      "Which deployment options do you have for SAP Fiori UIs and OData Services regarding the software components?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "One deployment package on a different system from the business system",
      "One deployment package on the same system as the business system",
    ],
    wrongAns: [
      "Two different deployment packages on the same system as the business system",
      "Two different deployment packages on a different from the business packages",
    ],
  },
  {
    questionText:
      "To generate SAPUI5 coding that is based on prototypes, which tool do you use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP WEB IDE"],
    wrongAns: ["UI Theme Designer", "SAP BUILD", "SPLASH"],
  },
  {
    questionText:
      "What are some advantages of the Model View Controller (MVC) design pattern used in SAPUI5?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "MVC artifacts can be transported and debugged separately.",
      "Allows changing the view without modifying the underlying business logic.",
    ],
    wrongAns: [
      "Allows to define several views of the same data.",
      "It supports quick coding.",
    ],
  },
  {
    questionText: `Scenario: A developer is tasked with creating an SAP Fiori application for inventory management. 
      The company wants to ensure that the application adheres to best practices and provides a consistent user experience.
      Which of the following resources would be most beneficial for the developer?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP Fiori Design Guidelines",
      "SAP Fiori Implementation Blueprints",
      "SAP Fiori User Feedback Portal",
    ],
    wrongAns: ["SAP Fiori Customization Manual", "SAP Fiori Debugging Toolkit"],
  },
  {
    questionText:
      "In the context of SAP Fiori, which of the following is a recommended practice before deploying an application to the production environment?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Conducting end-to-end testing"],
    wrongAns: [
      "Manual code inspection",
      "Direct deployment without transport requests",
      "Skipping the testing phase",
    ],
  },
  {
    questionText: "What can you connect with the SAP Cloud Connector?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "SAP BTP services to on-premise systems in a customer's network",
    ],
    wrongAns: [
      "SAP BTP services to SAP Business Application Studio",
      "SAP API Business Hub to client devices",
      "SAP Business Application Studio to a Cordova development environment",
    ],
  },
  {
    questionText:
      "What are the limitations of publishing CDS as OData service by adding a @OData.publish:true?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "No customized ABAP code in SAP Gateway",
      "Can not change names of entity sets",
      "Only 1 level is taken into consideration when exposing associations",
    ],
    wrongAns: ["Can not expose associations"],
  },
  {
    questionText:
      "Which of the following tools is used to configure and adapt the SAP Fiori Launchpad content, such as\ncatalogs, groups, and roles?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Launchpad Designer"],
    wrongAns: ["Role Editor", "Theme Designer", "UI5 Inspector"],
  },
  {
    questionText:
      "Your customer needs to securely connect the SAP HANA Cloud Connector to the Web IDE of an on-premise system. How does the SAP HANA cloud connector help do this?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "It secures an SSL tunnel between the SAP Hana Cloud and the on-premise system",
      "It creates connectivity by a reverse-invoke process on the on-premise system",
    ],
    wrongAns: [
      "It supports custom destination API configuration and certificate inspection",
      "It initiates a cloud-based reverse-invoke process",
    ],
  },
  {
    questionText:
      "Which of the following make up the configuration of a tile for launching an SAP fiori app of type SAP UI5 in the SAP Fiori launchpad designer?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Tile Configuration",
      "Tile Implementation",
      "Semantic Object",
      "Target Mapping",
    ],
    wrongAns: ["Launchpad creation via LPD_CUST"],
  },
  {
    questionText:
      "Which security features does the SAP Fiori provide to restrict the access to native device capabilities?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Restricted device functionality using a client policy",
      "Bridge for non-Fiori content",
    ],
    wrongAns: ["Encrypted storage of data on the device", "Privacy screen"],
  },
  {
    questionText:
      "Which of the following is a key component of the SAP Fiori architecture that provides connectivity between the front-end and back-end systems?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Gateway"],
    wrongAns: [
      "SAP Fiori Launchpad",
      "SAP Fiori Designer",
      "SAP Fiori Elements",
    ],
  },
  {
    questionText: "What problem is solved by the wizard floorplan?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["The user must process a long and unfamiliar task"],
    wrongAns: [
      "You want to display all the information of a simple or complex object, with different facets, in a responsive way",
      "You want to display a large collection of items, and the user can take some action",
      "You want to display a collection of items and process them or delegate them to someone else",
    ],
  },
  {
    questionText:
      "What three key aspects are important when talking about innovation?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Viability", "Feasibility", "Desirability"],
    wrongAns: ["Scalability"],
  },
  {
    questionText:
      "Which of the following SmartControls provides visualizations like charts and graphs in SAP Fiori applications?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SmartChart"],
    wrongAns: ["SmartTable", "SmartForm", "SmartFilterBar"],
  },
  {
    questionText:
      "Which of the following sequences is the correct sequence for the Problem Space phase in a Design Thinking workshop?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Scoping, 360’ Research, Synthesis"],
    wrongAns: [
      "360’ Research, Scoping, Synthesis",
      "Scoping, Synthesis, Ideation",
      "Scoping, 360’ Research, Ideation",
    ],
  },
  {
    questionText: "Why does SAP Fiori use an intent-based navigation?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Apps targets can be deployed separately"],
    wrongAns: [
      "App implementation make the app deployment easier",
      "The concrete app targets can be deployed separately",
      "Apps can be developed and deployed in parallel",
    ],
  },
  {
    questionText:
      "Since what version of SAPUI5 is the automatic model instantiation supported?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["1.30"],
    wrongAns: ["1.26", "1.28", "1.34"],
  },
  {
    questionText:
      "What does coherence refer to in the SAP Fiori design principles?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "A consistent interaction and visual design language",
      "The same intuitive experience across the whole enterprise",
    ],
    wrongAns: [
      "The way in which the data is handled internally",
      "A description of the technological foundation",
    ],
  },
  {
    questionText:
      "Which of the following tools in SAP Fiori provides insights into runtime errors and issues during application execution?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Fiori Debugger"],
    wrongAns: [
      "SAP Fiori Performance Analyzer",
      "SAP Fiori Inspector",
      "SAP Fiori Test Recorder",
    ],
  },
  {
    questionText: "How do you access the MessageManager?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "It is a singleton and can be accessed by the getMessageManager function on the core object",
    ],
    wrongAns: [
      "You have to instantiate the MessageManager using the constructor function",
      "Each UI-control provides a function to access the messager",
    ],
  },
  {
    questionText: "What are the features of Fiori Elements?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "No JavaScript UI Coding",
      "Centrally Provided Templates covering Reporting, Analytic, Transaction secnarios.",
      "Metadata-driven approach of Fiori development",
    ],
    wrongAns: [
      "A replacement for traditional free style SAPUI5 programming, can satisfy all customer needs in a brand new approach.",
    ],
  },
  {
    questionText:
      "Scenario: A developer has made changes to an existing SAP Fiori application. Before deploying the changes, which tool can be used to compare the new version with the previous version?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP Fiori Debugger",
      "SAP Fiori Inspector",
      "SAP Fiori Version Comparator",
    ],
    wrongAns: ["SAP Fiori Test Recorder", "SAP Fiori Monitor"],
  },
  {
    questionText: "What different content densities are provided by SAPUI5?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Cozy", "Compact", "Condensed"],
    wrongAns: ["Large", "Strict"],
  },
  {
    questionText:
      "Which HTTP request method can you use to create an OData resource?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["POST"],
    wrongAns: ["PUT", "UPDATE", "CHANGE"],
  },
  {
    questionText:
      "What data sources are available in the SAP Web IDE to add a data source configuration to the manifest.json?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Service Catalog", "Service URL", "File System"],
    wrongAns: ["Enterprise Service Registry", "Process Integration Platform"],
  },
  {
    questionText:
      "Is true to say that the sap.m.App control does not offer responsive behaviour?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "No this is not true, sap.m.App does provide responsive behavior",
    ],
    wrongAns: [
      "This is true, the control doesn't provide reponsive behavior",
      "It depends on the SAPUI5 version. From 1.30 on sap.m.App does provide responsive behaviours",
    ],
  },
  {
    questionText:
      "Which of the following data models in SAPUI5 is best suited for internationalization and localization of applications?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Resource Model"],
    wrongAns: ["XML Model", "JSON Model", "OData Model"],
  },
  {
    questionText:
      "What steps are part of the design phase (Solution Space) in the DLD?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Prototype", "Validate", "Ideate"],
    wrongAns: ["Scope", "Test"],
  },
  {
    questionText:
      "What aspects of the runtime environment can be accessed by the Device API of SAPUI5?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Operating system",
      "Touch specific features",
      "Orientation change",
      "Screen size",
    ],
    wrongAns: ["Language"],
  },
  {
    questionText:
      "In the context of SAPUI5, what is the primary purpose of extensibility?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "To allow for modifications and enhancements without altering the original application.",
    ],
    wrongAns: [
      "To change the underlying programming language of an application.",
      "To redesign the core functionality of an application.",
      "To add new database tables and fields.",
    ],
  },
  {
    questionText:
      "While testing an SAP Fiori app you discover that a button on the page delivers no response. Which of the following agile pyramid options do you use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["OPA"],
    wrongAns: ["QUnit", "Mock server", "Sinon"],
  },
  {
    questionText: "Since when is the Split-Screen layout deprecated?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["1.48"],
    wrongAns: ["1.5", "1.44", "1.42", "1.46"],
  },
  {
    questionText: "What is the usage of Object Model annotations?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Annotation for structured and transactional aspects of the data model",
    ],
    wrongAns: [
      "Semantic annotation for fields of the result set",
      "UI-relevant annotations used SAP Fiori elements",
      "Annotation for the consumption layer",
    ],
  },
  {
    questionText:
      "You develop an SAPUI5 app that updates data for sales order and sales order items on the back-end system. What do you create to implement a deep insert?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Create an object structure that defines the hierarchy",
      "Create a nested structure for Sales Order and Sales Order Items",
    ],
    wrongAns: [
      "Create a flat structure with Sales Order and Sales Order Items, and then add an expand command",
      "Create individual structures for both Sales Order and Sales Order Items, and then batch them",
    ],
  },
  {
    questionText:
      "Which of the following components in the SAP Fiori Launchpad provides a visual representation of an app and serves as an entry point to the app?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Tile"],
    wrongAns: ["Catalog", "Group", "Role"],
  },
  {
    questionText:
      "What relation is between the model and the controller in the standard MVC implementation?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "The model notifies the controller about changes",
      "The controller modifies the model",
    ],
    wrongAns: [
      "The controller sets the model visibility",
      "The model updates the controller",
    ],
  },
  {
    questionText:
      "Which HTTP request methods does the SAP Gateway server use to compute and return a new eTag in a response header?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["PUT", "POST"],
    wrongAns: ["DELETE", "GET"],
  },
  {
    questionText: "Where are the themes saved for the SAP Fiori launchpad?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["In the theme repository"],
    wrongAns: [
      "In the UI theme designer tool",
      "In the bootstrap",
      "In the theme data center",
    ],
  },
  {
    questionText:
      "Which UI5 theme is replacing SAP Blue Crystal as the base Fiori theme?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Belize"],
    wrongAns: ["SAP High Contrast Black", "SAP Corbu", "SAP Tradeshow"],
  },
  {
    questionText:
      "Which of the following is a key feature of OData in SAPUI5 applications?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["It allows for CRUD operations on data sources."],
    wrongAns: [
      "It is primarily used for offline data storage.",
      "It does not support batch operations.",
      "It is a proprietary protocol exclusive to SAP.",
    ],
  },
  {
    questionText:
      "Scenario: A company is migrating its application development environment to the cloud. They want a tool that offers a modern development experience with pre-configured development environments.\nWhich of the following SAP tools would be most suitable for this purpose?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["SAP Web IDE", "SAP Business Application Studio"],
    wrongAns: ["SAP Data Intelligence", "SAP Fiori Designer"],
  },
  {
    questionText:
      "Which of the following is a key component of the SAP Fiori Launchpad that provides users with access to their apps?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Tiles"],
    wrongAns: ["Controllers", "Fragments", "Extensions"],
  },
  {
    questionText:
      "You need to configure an SAP Destination service to enable SAP Business Application Studio to extend an existing SAP Fiori app. Which configuration setting for the WebIDEUsage property is required?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["extend_abap"],
    wrongAns: ["ui5_execute_abap", "dev_abap", "odata_abap"],
  },
  {
    questionText:
      "Which features of the SAP Business Application Studio help you extend a standard SAP Fiori app?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "The Extensibility Pane to choose extension points",
      "A wizard to generate the files for each extension possibility",
    ],
    wrongAns: [
      "The Descriptor Editor to choose elements for extension",
      "An editor to modify the data model in the extended project",
    ],
  },
  {
    questionText:
      "Your customer asks you to add text for a new language to an app. Which file do you provide to the translator?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["i18n.properties"],
    wrongAns: ["Components.js", "Master.view.xml", "Manifest.json"],
  },
  {
    questionText:
      "Scenario: A developer is creating an SAPUI5 application that needs to display a list of products. The data for the products is stored in a remote server.\nWhich of the following would be the most suitable approach to fetch and display this data?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Integration with OData Service",
      "Use of Resource Model",
      "Use of JSON Model",
    ],
    wrongAns: ["Use of XML Model", "Direct database queries"],
  },
  {
    questionText:
      "Which of the following is NOT a phase in the standard SAP Fiori application testing process?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Direct Deployment"],
    wrongAns: ["Load Testing", "Integration Testing", "Unit Testing"],
  },
  {
    questionText:
      "You extend an SAP Fiori app. The visibility value of a View Button control needs to be modified. Which extension point do you use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["View Modification"],
    wrongAns: ["View Replacement", "View Extension", "View Visibility"],
  },
  {
    questionText: "Which of the following are features of the SAPUI5 SDK?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Feature-rich UI controls for handling complex UI patterns",
      "Full translation support",
    ],
    wrongAns: [
      "Responsiveness across browsers on non-mobile devices only",
      "Interface for Web Dynpro",
    ],
  },
  {
    questionText:
      "What happens when you use the SAP Web IDE console during a deployment?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "You can view error messages when a deployment is NOT successful",
      "You can debug the error messages in the console",
    ],
    wrongAns: [
      "You can archive the success messages in the console",
      "You can view error messages when a deployment is successful",
    ],
  },
  {
    questionText: "What problem is solved by the worklist report floorplan?",
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "You want to display a collection of items and process them or delegate them to someone else",
    ],
    wrongAns: [
      "You want to display all the information of a simple or complex object, with different facets, in a responsive way",
      "You want to display a large collection of items, and the user can take some action",
      "The user must process a long and unfamiliar task",
    ],
  },
  {
    questionText:
      "Your customer requires that the SAPUI5 design of all apps matches their corporate theme. Which of the following actions do you perform?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Create a theme using the Theme Designer implementing the theme.",
      "Create a module using the Web IDE implementing the theme.",
      "Create a css file using the SAP Business Application Studio implementing the theme.",
    ],
    wrongAns: [
      "Reference the relevant artifacts in the bootstrap of the app.",
      "Create a model using the SAP Business Application Studio implementing the theme.",
    ],
  },
  {
    questionText:
      "The SAP Fiori Design Guidelines are available for various device types. For what device types are the design guidelines available?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP Fiori for iOS",
      "SAP Fiori for Web",
      "SAP Fiori for Android",
    ],
    wrongAns: ["SAP Fiori for Windows", "SAP Fiori for Blueberry"],
  },
  {
    questionText:
      "Your customer wants to enable the SAP Fiori app to be accessed in multiple languages. Which of the following activities do you perform?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Create a resource file for each language",
      "HTML -enable the special characters in the resource file",
      "Create a resource file containing key/value pairs",
    ],
    wrongAns: [
      "Create a resource file with a .props extension",
      "Create a view file and a controller file for each language",
    ],
  },
  {
    questionText: "What is SAP Kapsel?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "SAP Kapsel provides the API to interact from Cordova based web applications to SMP# and software cloud platforms",
      "SAP specific plug-in for Cordova",
    ],
    wrongAns: [
      "SAP specific plug-in for Apple iOS",
      "SAP specific plug-in for Android",
    ],
  },
  {
    questionText:
      "Which options are known to consume SAP Fiori apps on mobile clients without using the SDK for iOS or Android?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP Fiori client app or custom SAP Fiori Client",
      "SAP Fiori Mobile with Kapsel SDK",
      "SAP Fiori in a browser",
    ],
    wrongAns: ["SAP Fiori GUI Client"],
  },
  {
    questionText:
      "In a typical SAP Fiori landscape, which server instance stores the SAP Fiori SAPUI5 application code for a transactional app?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Front-End Server (FES)"],
    wrongAns: [
      "SAP HANA XS Engine",
      "SAP Back-End Server (BES)",
      "SAP Web Dispatcher",
    ],
  },
  {
    questionText:
      "In the context of SAP Fiori, which of the following ensures that applications provide a consistent look and feel across different devices and platforms?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Adaptive design"],
    wrongAns: ["Role-based design", "Complex design", "Static design"],
  },
  {
    questionText:
      "Which methods can you use to bind data to the controls in SAPUI5?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Element", "Property", "Aggregation"],
    wrongAns: ["Combination", "Structure"],
  },
  {
    questionText:
      "Your customer asks you for the advantages of the Model View Controller (MVC) design pattern. Which of the following answers do you provide?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "MVC artifacts can be transported and debugged separately",
      "MVC is easy to implement for the project team members and supports quick coding",
    ],
    wrongAns: [
      "The data that the models work with can be reused by several different applications",
      "The project team members that have extensive UI skills can concentrate in that area",
    ],
  },
  {
    questionText:
      "What steps are used to display a field as a rating indicator?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Set type of line item to #AS_DATAPOINT",
      "Add a @UI.datapoint to the field and set the visualization to #RATING",
    ],
    wrongAns: [
      "Add a @UI.chart annotation to the field and set the visualization to #RATING",
      "Set the visualization of line item to #RATING",
    ],
  },
  {
    questionText:
      "What is a prerequisite for configuring the SAP Fiori HAT Connector?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Create an SAP HANA Cloud Platform (HCP) Web IDE account"],
    wrongAns: [
      "Create a local Cordova project",
      "Set the path for custom plug-ins",
      "Generate a service certificate",
    ],
  },
  {
    questionText: `Which processes are part of the design phase when you develop SAP Fiori apps?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["Ideation, Prototyping and Validation"],
    wrongAns: [
      "Developing, Testing and Deploying",
      "Requirement gathering, Research and Documentation",
      "Scoping, 360 degree research and Synthesis",
    ],
  },
  {
    questionText: `Which of the following floorplans also have a standard SAP Fiori Elements implementation available as a
    part of SAP Fiori 2.0?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["List Report", "Analytical List Page", "Overview Page"],
    wrongAns: ["Initial Page", "Wizard"],
  },
  {
    questionText: `Which of the following extensibility options in SAPUI5 allows developers to add or replace views,
    controllers, or other application files?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Extension Points"],
    wrongAns: ["UI Controller Hooks", "Custom Controls", "Component Variants"],
  },
  {
    questionText: `Which control can you use to create responsive table-free layouts?`,
    questionHint: "-",
    correctAns: ["sap.ui.layout.Grid"],
    wrongAns: [
      "sap.ui.layout.ResponsiveFlowLayout",
      "sap.ui.layout.HorizontalLayout",
      "sap.ui.layout.VerticalLayout",
    ],
  },
  {
    questionText: `Which of the following statements are correct with respect to the SAP Web IDE?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "SAP web IDE provides application templates as a foundation of highly efficient app development.",

      "SAP web IDE is a browser-based development environment",
    ],
    wrongAns: ["SAP web IDE is a development environment for SAP ABAP"],
  },
  {
    questionText: `You need to bind data from a model to an SAPUI5 view control. Which of the following models are valid?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["one-way binding", "two-way binding", "One-time binding"],
    wrongAns: ["Resource-model binding", "Three-way binding"],
  },
  {
    questionText: `Which of the following resources provides detailed information on the design patterns, usage, and
    behavior of SAP Fiori applications?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["SAP Fiori Design Guidelines"],
    wrongAns: [
      "SAP Fiori Implementation Manual",

      "SAP Fiori Developer Blueprint",

      "SAP Fiori Design Toolkit",
    ],
  },
  {
    questionText: `What options can you use to add UI annotations to a SAP Fiori Element Page?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Add Annotations to the underlying CDS view",
      "Add Annotation to the Annotation file present as a part of WebIDE project using Annotation modeler",
      "Add Annotation with the help of a Metadata Extension",
    ],
    wrongAns: [
      "Add Annotation to the underlying Database Table",
      "Add Annotations to the manifest file present as a part of WebIDE project using the Descriptor Edit",
    ],
  },
  {
    questionText: `n the data in the screenshot, you need to display the List of Companies in the Americas region. Which
    binding option do you use for the values X, Y, and Z in the view?`,
    questionHint: "Please choose the correct answer - have image",
    correctAns: ["X: /region/0/companies Y: name Z: city"],
    wrongAns: [
      "X: /region/companies Y: name Z: city",
      "X: /region/companies Y: companies/name Z: companies/city",
      "X: /region/0/companies Y: companies/0/name Z: companies/0/city",
    ],
  },
  {
    questionText: `What are the Lifecycle events of an SAPUI5 view controller?
    `,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["onExit", "onBeforeRendering"],
    wrongAns: ["onEntry", "onExecution"],
  },
  {
    questionText: `Why do you use the Cordova and SAP Kapsel plug-ins when using the SAP Web IDE, SAP HAT add-on?`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: ["To integrate device APIs", "To use offline OData"],
    wrongAns: [
      "To use X.509 client certificates",
      "To enable multiple SAPUI5 apps",
    ],
  },
  {
    questionText: `Which of the following can be used for usability assessment?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Questionnaires", "User testing", "Heuristic evaluation"],
    wrongAns: ["User observation"],
  },
  {
    questionText: `Which of the following is a key benefit of using the MVC architecture in SAPUI5 application development?
    `,
    questionHint: "Please choose the correct answer",
    correctAns: ["Ensures separation of concerns"],
    wrongAns: [
      "Combines business logic with UI",
      "Reduces the need for data binding",
      "Eliminates the need for controllers",
    ],
  },
  {
    questionText: `Scenario: An organization wants to group related apps in the SAP Fiori Launchpad for their sales
    department. Which of the following features of the Launchpad would facilitate this?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Catalogs", "Roles", "Groups"],
    wrongAns: ["Worklists", "Views"],
  },
  {
    questionText: `What is the name of the UI-control that acts a canvas for diagrams?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["VizFrame"],
    wrongAns: ["SAPDiagram", "VizDiagram", "VizArea"],
  },
  {
    questionText: `Which of following templates display only one business entity?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["Object Page"],
    wrongAns: ["List Report", "Overview Page", "Analytic List Page"],
  },
  {
    questionText: `What are the differences between analytical entity set and normal entity set from an OData consumer
    perspective?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "The Analytical entity set, returns all data, needed to analyze the client",
      "Analyzes the use of the database and runs faster when SAP HANA is used as database compared to a normal entity set.",
      "The Analytical entity set, generates a new field for primary key.",
    ],
    wrongAns: [
      "The Analytical entity set, returns summarized results according to the $select parameter.",
    ],
  },
  {
    questionText: `Which type of application can use the dynamic page layout?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "You can use the dynamic page layout of any kind of application",
    ],
    wrongAns: [
      "The layout is deprecated, which means you should not use the layout anymore",
      "The dynamic page layout is only used for analytical applications",
      "The layout is only used for master-detail scenario",
    ],
  },
  {
    questionText: `What is the correct HTTP request method that is required to modify an ODATA resource?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["UPDATE"],
    wrongAns: ["PUT", "CHANGE", "POST"],
  },
  {
    questionText: `Which of the following tools in SAP BTP provides a comprehensive environment for developing, testing,
    and deploying SAP Fiori applications?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Business Application Studio"],
    wrongAns: ["SAP Data Intelligence", "SAP Fiori Designer", "SAP Web IDE"],
  },
  {
    questionText: `The CDS annotation @UI.facet is used to`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Create a collection facet, which is displayed as section",
      "Create content, like field groups or charts for a Facet",
      "Create a Header Facet",
    ],
    wrongAns: ["Create a reference under collection facet"],
  },
  {
    questionText: `Scenario: An e-commerce company is developing an SAPUI5 application to manage customer orders.
    They want to ensure that the application is responsive and provides a consistent user experience across
    devices.
    Which of the following SAPUI5 features would be essential for this purpose?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "Responsive Design","Data Binding",
      "Use of Standard Controls",
    ],
    wrongAns: ["Direct CSS Styling", "Fragment Loading"],
  },
  {
    questionText: `Which method on the SAP NetWeaver Gateway must you use to provide deep inserts?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["CREATE_DEEP_ENTITY"],
    wrongAns: [
      "CREATE_INSERT_ENTITY",
      "CREATE_INSERT_DEEP_ENTITY",
      "CREATE_DEEP_INSERT_ENTITY",
    ],
  },
  {
    questionText: `Which elements are part of the UX?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["User interaction", "User emotion"],
    wrongAns: ["User response", "User effectiveness"],
  },
  {
    questionText: `What steps needs to be done in manifest.json if you need to hide variant function in a list report?
    `,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Set setting variantManagementHidden to true",
      "Add setting to enable smart Variant Managemen",
    ],
    wrongAns: [
      "Set setting variantManagementHidden to false",
      "Add setting to disable smart variant Management",
    ],
  },
  {
    questionText: `In which attribute do you specify the themes for an SAP Fiori app?.`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["data-sap-ui-theme of <script> tag"],
    wrongAns: [
      "data-sap-ui-theme of the <head> tag",
      "sap-ui-theme of <body> tag",
      "sap-ui-theme of a <title> tag",
    ],
  },
  {
    questionText: `Your customer requests a special create method to enable the creation of the full OData hierarchy. Which
    OData service method can you use?
    `,
    questionHint: "Please choose the correct answer.",
    correctAns: ["CREATE_DEEP_ENTITY"],
    wrongAns: ["CREATE_BATCH_ENTITY", "EXECUTE_DEEP_INSERT", "CREATE_STREAM"],
  },
  {
    questionText: `You want to define a property with the name width to enhance a standard UI5-control. The property
    should hold the current with of the UI-control.
    What is the best approach to define such a properties type?`,
    questionHint: "Please choose the correct answer. ",
    correctAns: ["Define the property width of the type sap.ui.core.CSSSize"],
    wrongAns: [
      "Define the property width of the type sap.ui.core.Integer",
      "Define the property width of the type sap.ui.core.type.CSSSize",
      "Define the property width of the type string",
    ],
  },
  {
    questionText: `What impact does UX have on monetary values?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Save training costs",
      "Gain productivity and data quality",
      "Decrease change requests and user errors",
    ],
    wrongAns: [
      "Increase user satisfaction",
      "Strengthen relationship between customers",
    ],
  },
  {
    questionText: `Which of the following user authentication and Single sign-on mechanisms are supported by SAP Fiori
    Client?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["X.509 client certificates", "SAML", "One-time password"],
    wrongAns: ["Iris scan"],
  },
  {
    questionText: `What is the required content of the Component.js file of an extension project?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["The link to the parent app", "The customizing section"],
    wrongAns: ["The controller IDs", "The namespace of the parent app"],
  },
  {
    questionText: `What are the current SAP UI Tools?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP Screen Personas",
      "Flexible UI Designer",
      "SAPUI5 Application Development Tools",
    ],
    wrongAns: ["SAP NetWeaver Gateway", "SAP NetWeaver Portal"],
  },
  {
    questionText: `In the design thinking phase of your customer project, one design is accepted as viable. What other
    attributes need to be valid for this design to be considered?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Desirable", "Feasible"],
    wrongAns: ["Achievable", "Usable"],
  },
  {
    questionText: `Scenario: A company is implementing SAP Fiori applications for its HR department. They want to ensure
    that the applications are tailored to the specific tasks and needs of HR personnel.
    Which SAP Fiori design principle would be most relevant in this context?
    `,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Role-based", "Delightful", "Coherent"],
    wrongAns: ["Adaptive", "Simple"],
  },
  {
    questionText: `What are some characteristics of fragments?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Fragments can be a stand-alone view",
      "Fragments are light-weight UI parts that can be reused.",
    ],
    wrongAns: [
      "Fragments are found by SAPUI5 Runtime using the module loading mechanism",
      "Fragments have their own controller",
    ],
  },
  {
    questionText: `You need to explain the core functions of OPA5 for testing SAPUI5 apps. Which test options are offered
    by OPA5?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Navigation tests", "User interaction tests"],
    wrongAns: ["Development tests", "Load tests"],
  },
  {
    questionText: `The SAP Fiori Launchpad serves as a...`,
    questionHint: "Please choose the correct answer",
    correctAns: ["Central entry point to SAP Fiori apps"],
    wrongAns: [
      "Database management tool",
      "Deployment platform for SAP HANA",
      "Code editor for SAPUI5",
    ],
  },
  {
    questionText: `Why is it advisable to not use a custom CSS file in your SAP UI5 applications?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      `Having one central design created with the theme designed is every efficient. When something
    needs to be changed at the client interface, it is easier to handle.`,
    ],
    wrongAns: [
      "SAPUI5 has problems with custom CSS",
      "Time spent designing modified CSS is expensive.",
    ],
  },
  {
    questionText: `What does effectiveness mean in the relation to user interface?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "The accuracy and completeness with which specific users can achieve specified goals in specific environments",
    ],
    wrongAns: [
      "The source expended in relation to the accuracy and completeness of goals achieved",
      "The comfort and acceptability of the work system to its users and other people affected by its use",
    ],
  },
  {
    questionText: `You need to consume the OData Service from the Gateway to create a new SAP Fiori app in the SAP Web
    IDE. What value do you configure in the WebIDEUsage property for the destination in the SAP HANA
    Cloud Platform?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["odata_abap"],
    wrongAns: ["dev_abap", "odata_gen", "odata_xs"],
  },
  {
    questionText: `Which info will be used for creating a destination in SAP Cloud Platform for Fiori Elements development?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Virtual name in SAP Cloud Connector"],
    wrongAns: [
      "Internal address of SAP Backend Server",
      "External name in SAP Cloud Connector",
      "Internal name in SAP Cloud Connector",
    ],
  },
  {
    questionText: `You are developing SAP Fiori Elements applications. Which of the following actions are available in SAP
    Web IDE?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Create an annotation file associated with the OData service and add annotations",
      "Choose the OData service as data provider for the project",
    ],
    wrongAns: [
      "Add catalog to user menu in a PFCG role and grant the role to user",
      "Create a catalog, target mapping, and tiles",
    ],
  },
  {
    questionText: `Scenario: A company wants to extend a standard SAP Fiori application by adding new buttons to the
    application toolbar. These buttons will trigger custom actions.
    Which of the following extensibility approaches would be most relevant for this requirement?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Fragment Extensions", "Extension Points"],
    wrongAns: ["UI Controller Hooks", "Custom Controls"],
  },
  {
    questionText: `In the context of SAP BTP, which service provides tools and capabilities for connecting cloud applications
    with on-premise solutions?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP Cloud Connector"],
    wrongAns: [
      "SAP BTP Integration Suite",
      "SAP Data Intelligence",
      "SAP BTP Extension Suite",
    ],
  },
  {
    questionText: `What do you focus on when it comes to decomposition and re-composition?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "The person’s tasks that should be supported by the application",
    ],
    wrongAns: [
      "The data and functions that are already in the system",
      "The expensive of the implementation",
      "The building of mega transactions to support all needs of all people",
    ],
  },
  {
    questionText: `When do you use flexible column layout`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "You want to create a master-detail-detail scenario in which the user can drill down or navigate",
    ],
    wrongAns: [
      "You want to embed the SAP Fiori launchpad or overview page into one of the columns",
      "You want to split a single object into multiple columns or display only a small amount of information",
      "You want to open multiple instances of the same object type",
    ],
  },
  {
    questionText: `Scenario: A company has implemented a standard SAP Fiori application for purchase order management.
    They want to add custom fields and logic to the application to cater to their specific business processes.
    Which of the following extensibility approaches would be most suitable?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Implementing UI Controller Hooks",
      "Creating Custom Controls.",
      "Using Extension Points.",
    ],
    wrongAns: [
      "Modifying the standard application directly.",
      "Using Component Variants.",
    ],
  },
  {
    questionText: `Which of the following extensibility options in SAPUI5 is specifically designed for the modification of
    component behavior without changing the component's source code?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Component Variants"],
    wrongAns: ["Extension Points", "Custom Controls", "UI Controller Hooks"],
  },
  {
    questionText: `Which model type in SAPUI5 does NOT support one-way and two-way binding from model to view?
    `,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Resource model"],
    wrongAns: ["JSON mode", "XML model", "OData mode"],
  },
  {
    questionText: `Which of the following best describes the primary goal of SAP Fiori's design strategy?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Role-based and user-centric experiences"],
    wrongAns: [
      "Complex and detailed user interfaces",
      "Non-responsive designs",
      "Desktop-only applications",
    ],
  },
  {
    questionText: `Which SAP Fiori application is launched by using the search functionality instead of using a tile?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Factsheet"],
    wrongAns: ["Legacy", "Transactional", "Analytical"],
  },
  {
    questionText: `What attributes is assigned to @UI.fieldGroup to add an identifier?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Qualifier"],
    wrongAns: ["Identifier", "Quantity", "Identity"],
  },
  {
    questionText: `The SAP Fiori architecture is primarily based on which of the following application development
    frameworks?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAPUI5"],
    wrongAns: ["VueJS", "AngularJS", "ReactJS"],
  },
  {
    questionText: `In the context of SAP BTP, which service provides capabilities for extending SAP Cloud solutions?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP BTP Extension Suite"],
    wrongAns: [
      "SAP BTP Database Suite",
      "SAP BTP Analytics Suite",
      "SAP BTP Integration Suite",
    ],
  },
  {
    questionText: `What modes are provided by the enumeration sap.m.SplitAppMode?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["ShowHideMode", "PopoverMode", "StretchCompressMode"],
    wrongAns: ["HodeShowMode", "ShrinkCozyMode"],
  },
  {
    questionText: `Your customer needs an app that can perform data modifications. Which ODataModel binding-mode do
    you select?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Two-way"],
    wrongAns: ["One-time", "Three-way", "One-way"],
  },
  {
    questionText: `Which file of the SAP HAT Connector stores the WebIDEHosts URL and can be used for troubleshooting?`,
    questionHint: "Please choose the correct answer",
    correctAns: ["Config.json"],
    wrongAns: ["Package.json", "Assistmsg.json", "appConfig.js"],
  },
  {
    questionText: `Which of following steps are needed to create an association in CDS and expose it?`,
    questionHint: "-",
    correctAns: [
      "Expose the association by writing its name in projection list",
      'Declare an association using "association to" statement',
    ],
    wrongAns: [
      "Declare an association using \"left outer join\" statement",
      "Expose fields in the association by writing each field in projection list",
    ],
  },
  {
    questionText: `What annotations are required to declare that an ABAP Core Data System supports search capabilities?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["@Search.searchable"],
    wrongAns: ["@Search.allowed", "@Search.possible"],
  },
  {
    questionText: `Which application in SAP Fiori launchpad helps the user to find applications that are available to user?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Application Finder"],
    wrongAns: ["Fiori Designer", "Tile Finder", "Fiori AppSearch"],
  },
  {
    questionText: `You finalized your app development in the SAP Web IDE and need to deploy it. Which deployment targets
    are offered?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Register to SAP Fiori launchpad",
      "SAP HANA Cloud Platform",
      "SAPUI5 ABAP Repository",
    ],
    wrongAns: ["SAPUI5 Java Repository", "Deploy to SAP Fiori launchpad"],
  },
  {
    questionText: `Which of the following artefacts are contained in the OData URL structure?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["Service Root URI", "Query Options", "Resource Path"],
    wrongAns: ["Header data"],
  },
  {
    questionText: `Which annotations are needed in a CDS View to create an Analytic Card in an Overview Page?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["@UI.Chart", "@UI.lineItem"],
    wrongAns: ["@UI.identification", "@UI.dataPoint.responsible"],
  },
  {
    questionText: `You created a new catalog that contains some apps. You want to assign these apps to an existing role to
    provide authorization for the business users. How can you do this using the PFCG transaction?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["By adding the catalog to the menu tab of the role "],
    wrongAns: [
      "By assigning the authorization profile for the catalog in the authorization tab",
      "By adding the tile and target mapping to the group",
      "By adding the semantic object to the catalog and group",
    ],
  },
  {
    questionText: `In the context of SAP Fiori, which principle emphasizes the importance of providing a consistent user
    experience across different applications and processes?`,
    questionHint: "Please choose the correct answer.",
    correctAns: ["Coherent"],
    wrongAns: ["Delightful", "Role-based", "Simple"],
  },
  {
    questionText: `In SAP Business Application Studio, which feature allows developers to set up a dedicated environment
    tailored to specific application development tasks?`,
    questionHint: "-",
    correctAns: ["Dev Spaces"],
    wrongAns: ["Dev Zones", "Workspaces", "App Areas"],
  },
  {
    questionText: `You are modeling a new role for your SAP Fiori Launchpad users. Which of the following steps is an
    optional configuration step?
    `,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Create Group and Assign Tile"
    ],    
    wrongAns: [
      "Create Tiles and Target Mappings", "Create Catalog",
      "Assign Catalog to Role"
    ],
  },
  {
    questionText: `Which SAP Fiori app types require the SAP HANA database?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Analytical", "Factsheet"
    ],    
    wrongAns: [
      "Legacy", "Transactional"
    ],
  },
  {
    questionText: `What names have the view ports of the SAP Fiori launchpad?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Workspace", "Notification area",
      "Me area"
    ],    
    wrongAns: [
      "Desktop"
    ],
  },
  {
    questionText: `In SAP Fiori Elements, which annotation is used to define the UI behavior of a field, such as making it
    read-only or mandatory?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "UI.DataField"
    ],    
    wrongAns: [
      "UI.SelectionField", "UI.FieldGroup",
      "UI.DataFieldForAnnotation"
    ],
  },
  {
    questionText: `Which areas are part of an Analytic List Page?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "Content Area", "Visual Filters",
      "Title Area"
    ],    
    wrongAns: [
      "Selection Fields"
    ],
  },
  {
    questionText: `A business user is unable to find an application on the SAP Fiori Launchpad or on the App Finder. Which
    of the following options could explain why the tile is unavailable?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "The user does not have the proper PFCG role assigned to see the application or tile", "The catalogs assigned to the user do not contain the relevant application or tile.", "",
      "The target mapping for the tile is missing in the catalog."
    ],    
    wrongAns: [
      "The end user is missing the required group containing the tile.",
      "The OData service authorization is missing"
    ],
  },
  {
    questionText: `What impact does SAP Fiori have on Business`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Re-imagine processes", "Digitalization",
      "Simplification"
    ],    
    wrongAns: [
      "Web and open standards", "User-centered"
    ],
  },
  {
    questionText: `What are the SAP Fiori principles?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Rolebased", "Adaptive",
      "Coherent"
    ],    
    wrongAns: [
      "Complex", "Creative"
    ],
  },
  {
    questionText: `Which types of services are known or supported by the SAP Fiori launchpad?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Platform-specific services", "Platform-independent services"
    ],    
    wrongAns: [
      "UI5 services", "UI2 services"
    ],
  },
  {
    questionText: `As which app type does SAP Business Application Studio deploy an SAPUI5 app to the ABAP server?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "BSP"
    ],    
    wrongAns: [
      "OpenUI5", "HTML5",
      "ABAP"
    ],
  },
  {
    questionText: `What annotation is used to define the heading of list report?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "@UI.headerInfor.typeNamePlural"
    ],    
    wrongAns: [
      "@UI.header.title", "@UI.LineItem.headerTitle",
      "@UI.headerInfo.typeName"
    ],
  },
  {
    questionText: `Which of the following best describes the "Simple" design principle of SAP Fiori?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Applications should focus on essential tasks and hide unnecessary information."
    ],    
    wrongAns: [
      "Applications should have complex navigation structures.", "Applications should be designed for a single device type",
      "Applications should display all available data to the user."
    ],
  },
  {
    questionText: `How do you set a field as the title for a business entity?`,
    questionHint: "Please choose the correct answer",
    correctAns: [
      "Add @UI.headerInfo.title.value for the CDS view and reference it to the field"
    ],    
    wrongAns: [
      "Add @UI.headerInfo.title for the CDS view and reference it to field", "Add @UI.title annotation for that field",
      "Add @UI.headerInfo.title annotation for that field"
    ],
  },
  {
    questionText: `What visibility does a OData Model instance have when created automatically during application start?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Component scope"
    ],    
    wrongAns: [
      "Controller scope only", "View scope only",
      "Control scope only"
    ],
  },
  {
    questionText: `Why does it make sense to use the navigation API of SAPUI5 and not the concepts like the eventbus or
    the navcontainer functions of the base application?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Using the navigation API the configuration of routes and targets are clear separated from the application implementation", 
      "Using the navigation API it is possible to use bookmarks"
    ],    
    wrongAns: [
      "The eventbus is deprecated and shouldn't be used anymore", "The Navcontainer of the App-object is not accessible inside component based application"
    ],
  },
  {
    questionText: `Which of the following activities allow you to store your changes in a local Git repository?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Commit"
    ],    
    wrongAns: [
      "Save", "Clone",
      "Push"
    ],
  },
  {
    questionText: `Which of the following can you use to extend an SAP Fiori Elements application?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "App extension", "CDS extension"
    ],    
    wrongAns: [
      "Adaption extensions", "ABAP extension"
    ],
  },
  {
    questionText: `What can your customer use a custom SAP Fiori client for?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "To apply custom branding", "To wrap the application with SAP Mobile Secure",
      "To add additional plugins to the application"
    ],    
    wrongAns: [
      "To create non-Cordova hybrid application containers", "To build the SAP Fiori Client with a customized communication protocol"
    ],
  },
  {
    questionText: `What goals does the SAPUI5 framework have`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "User Interface technology for building and adapting client applications",
      "Providing an extensible framework for building desktop and mobile applications"
    ],    
    wrongAns: [
      "Providing a lightweight programming model for desktop only applications", 
      "User Interface technology for building and adapting server based applications"
    ],
  },
  {
    questionText: `What are Smart Controls?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Application templates for SAPUI5 applications to optimize development"
    ],    
    wrongAns: [
      "The predecessor of Smart Templates", "Basic SAPUI5 controls recommended for standalone usage",
      "SAPUI5 controls that can be rendered dynamically according to OData service annotations"
    ],
  },
  {
    questionText: `Scenario: A company is developing a series of SAP Fiori applications that need to be integrated with their existing on-premise SAP systems.
    Which of the following tools or services in SAP BTP would facilitate this integration?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP BTP Integration Suite", "SAP Business Application Studio",
      "SAP Cloud Connector"
    ],    
    wrongAns: [
      "SAP Data Intelligence",
      "SAP BTP Extension Suite"
    ],
  },
  {
    questionText: `Scenario: A company is developing a series of applications for its sales team. 
    They want to ensure UI consistency and reduce development time.
    Which of the following would be the most suitable approach?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Custom SAPUI5 development for each application", "Use of SAP Fiori Elements",
      "Use of SmartControls"
    ],    
    wrongAns: [
      "Integrating third-party UI libraries", "Manual CSS styling for each application"
    ],
  },
  {
    questionText: `Your customer requires that the SAPUI5 design of all apps reference a specific and consistent look and
    feel. What do you create?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Create a theme using the Theme Designer implementing the specific look and feel and reference this theme in the bootstrap of all apps", 
      "Create a css file using the Web IDE implementing the specific look and feel and reference this css in the bootstrap of all apps",
      "Create a model using the Web IDE implementing the specific look and feel and reference this model in the bootstrap of all apps"
    ],    
    wrongAns: [
      "Create a global JavaScript file using the Web IDE implementing the specific look and feel and reference this file in the bootstrap of all apps",
      "Create a module using the Web IDE implementing the specific look and feel and reference this module in the bootstrap of all apps"
    ],
  },
  {
    questionText: `What of the following is true for implementing your own renderer?`,
    questionHint: "There are 3 correct answer to this question.",
    correctAns: [
      "Implement the Renderer using AMD syntax", "Assign a reference to the renderer property of the UI control",
      "Implement a renderer class derived from sap.ui.core.Renderer in a separate file"
    ],    
    wrongAns: [
      "Implement the render function inside the control"
    ],
  },
  {
    questionText: `How do you integrate SAPUI5 in a Kapsel/Hybrid app?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Add the sap-mobile-hybrid.js file to the Hybrid app"
    ],    
    wrongAns: [
      "Add the SAPUI5 bootstrap code into index.html", "Create a new Kapsel plugin using SAPUI5",
      "Configure the SAPUI5 resources in the config.xml file of the Hybrid app"
    ],
  },
  {
    questionText: `What control in the index.html file is used support letterboxing if necessary?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "sap.ui.Shell"
    ],    
    wrongAns: [
      "sap.ui.core.ComponentContainer", "sap.ui.core.View",
      "sap.ui.core.Component"
    ],
  },
  {
    questionText: `You perform a QUnit test with the following syntactical options. Which call returns true when you execute it?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Assert.strictEqual(0,-0,\"true\");"
    ],    
    wrongAns: [
      "Assert.strictEqual(0,”0”,”true”)", "Assert.strictEqual(0,””,”true”)",
      "Assert.strictEqual(0,null,”true”)"
    ],
  },
  {
    questionText: `To which of the following does an SAP Fiori tile point directly?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "A target mapping with a semantic object and an action"
    ],    
    wrongAns: [
      "A semantic object", "An action",
      "An SAP Fiori app"
    ],
  },
  {
    questionText: `Scenario: A company is deploying multiple SAP Fiori applications to its production environment. They
    want to ensure a smooth deployment process without any conflicts or issues.
    Which of the following tools would be essential for this deployment process?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "SAP Fiori Launchpad", "SAP Fiori Inspector",
      "SAP Transport Management System (TMS)"
    ],    
    wrongAns: [
      "SAP Fiori Designer", "SAP Fiori Test Recorder"
    ],
  },
  {
    questionText: `What message types are known by SAPUI5?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Server messages", "Control messages"
    ],    
    wrongAns: [
      "Log messages", "UI-messages"
    ],
  },
  {
    questionText: `What is SAP Fiori floorplan?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "A floorplan is a UI pattern that provides consistent UX"
    ],    
    wrongAns: [
      "A floorplan is a layout of SAPUI5", "A floorplan is a layout of the SAP web dynpro layouts for SAP Fiori apps",
      "A floorplan defines the overall layout of an application"
    ],
  },
  {
    questionText: `In SAPUI5 applications, which model provides seamless integration with OData services and supports
    two-way data binding?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "OData Model"
    ],    
    wrongAns: [
      "JSON Model", "Resource Model", 
      "XML Model"
    ],
  },
  {
    questionText: `Which of the following is NOT a type of view supported by SAPUI5?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Python View"
    ],    
    wrongAns: [
      "JSON View", "XML View",
      "JavaScript View"
    ],
  },
  {
    questionText: `In a SAP Fiori hub deployment, where is the SAPUI5 application code stored for a transactional app?`,
    questionHint: "Please choose the correct answer",
    correctAns: [
      "SAP Back-End Server (BES)"
    ],    
    wrongAns: [
      "SAP Web Dispatcher", "SAP Front-End Server (FES)",
      "SAP HANA XS Engine"
    ],
  },
  {
    questionText: `Which different app types can be found in SAP Fiori?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Conceptual", "Technical"
    ],    
    wrongAns: [
      "Infrastructural", "Mobile",
      "Industrial"
    ],
  },
  {
    questionText: `Which of the following should you avoid with regard to golden rule "Every SAP Fiori app must run as a web
    app"?`,
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "Calling UI2 services directly instead of using APIs", "Use of platform-specific functionality without availability check",
      "Absolute URLs generated in front or back-end", "Hard dependencies between apps"
    ],    
    wrongAns: [
      "Using SAPUI5"
    ],
  },
  {
    questionText: `In the SAP Fiori design approach, which principle emphasizes the importance of providing users with
    feedback and interactive elements to create an engaging experience?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Delightful"
    ],    
    wrongAns: [
      "Coherent", "Adaptive",
      "Role-based"
    ],
  },
  {
    questionText: `What are the main artefacts of an SAPUI5 applications?`,
    questionHint: "There are 3 correct answers to this question",
    correctAns: [
      "Controllers", "Views",
      "Models"
    ],    
    wrongAns: [
      "CSS", "Control"
    ],
  },
  {
    questionText: `Choose available options for creating a value help for a selection field.`,
    questionHint: "There are 2 correct answers to this question",
    correctAns: [
      "By adding a value help annotation", "By adding a foreign key annotation"
    ],    
    wrongAns: [
      "If the domain which associates to the field, has a fixed value, the value help will be generated automatically.",
      "By adding annotation to list all possible in source code of CDS"
    ],
  },
  {
    questionText: `Which of the following is NOT a type of SAP Fiori Element?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Detail Page"
    ],    
    wrongAns: [
      "List Report", "Overview Page",
      "Object Page"
    ],
  },
  {
    questionText: `What areas are mandatory in the tile layout?`,
    questionHint: "There are 2 correct answers to this question.",
    correctAns: [
      "Header area", "Content area"
    ],    
    wrongAns: [
      "Status area", "Subtitle",
      "KPI area"
    ],
  },  {
    questionText: `What factors are key to user experience with user assistance?`,
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Instant", "Context-sensitive",
      "Seamless"
    ],    
    wrongAns: [
      "Confusing", "Error prone"
    ],
  },  {
    questionText: `Which of the following is a key benefit of using SAP Fiori Elements in application development?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Reduced development effort"
    ],    
    wrongAns: [
      "Limited UI consistency", "Restricted to desktop applications",
      "Custom coding for each application"
    ],
  },  {
    questionText: `What is the name of the aggregation of the sap.m.App control where the UI-controls are aggregated?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "pages"
    ],    
    wrongAns: [
      "fullPages", "detailPages",
      "masterPages"
    ],
  },
  {
    questionText: `What approach gives you the most flexibility for your SAPUI5 application?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Using Component based approach"
    ],    
    wrongAns: [
      "Using View only based approach", "Using Controller based approach",
      "Implement complex UIs in the index.html"
    ],
  },
  {
    questionText: `What is the purpose of SAP Build?`,
    questionHint: "Please choose the correct answer.",
    correctAns: [
      "Provides tooling to support the designer during various phases of design thinking"
    ],    
    wrongAns: [
      "Provides tooling to support the developer during development of back-end services",
      "Provides tooling to support the developer during development of SAPUI5 applications",
    ],
  },  
  //file idx = 4
];
