// SAP Certified Development Associate - SAP Fiori Application Developer - Full _ ERPPrep(1).PDF
const questions01 = [
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
    questionText:
      "Which of the following data models in SAPUI5 is best suited for internationalization and localization of\n" +
      "applications?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Resource Model"],
    wrongAns: ["OData Model", "JSON Model", "XML Model"],
  },
  {
    questionText: "What are the two components of the OData Runtime?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["GW_CORE", "IW_FND"],
    wrongAns: ["IW_HANA", "IW_BEP"],
  },
  {
    questionText:
      "Which of the following types are types of cards in an Overview Page?",
    questionHint: "There are 4 correct answers to this question.",
    correctAns: [
      "List Cards",
      "Link List Cards",
      "Analytic Cards",
      "Table Cards",
    ],
    wrongAns: ["Array Cards"],
  },
  {
    questionText:
      "What layout control is used to achieve flexible and responsible layouts?",
    questionHint: "_",
    correctAns: ["Grid"],
    wrongAns: ["VerticalLayout", "VerticalLayout", "Splitter"],
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
      "Your customer asks you to demonstrate their app with localization changes. Which activity do you\n" +
      "perform?",
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
      "Scenario: A developer is creating an application that allows users to filter and search for products based\n" +
      "on multiple criteria. Which SmartControl would be most suitable for this purpose?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["SmartForm", "SmartTable", "SmartFilterBar"],
    wrongAns: ["SmartLink", "SmartChart"],
  },
  {
    questionText:
      "In SAPUI5, which component provides a structured way to create web applications and ensures a\n" +
      "consistent app structure?",
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
      "Which of the following extensibility options in SAPUI5 allows for the addition of custom XML fragments\n" +
      "to views?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Fragment Extensions"],
    wrongAns: ["Custom Controls", "UI Controller Hooks", "Extension Points"],
  },
  {
    questionText:
      "You are an administrator for your S/4HANA 1809 landscape. You want to disable personalization and\n" +
      "themes on the SAP Fiori Launchpad for select users in one client. How can you do this?",
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
      "What is the purpose of the neo-app.json file located in the project root folder of your SAP Web IDE\n" +
      "project?",
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
      "It is released with SAP HANA SPS's",
      "It is included with SAP HANA express edition",
    ],
  },
  {
    questionText:
      "In the source code below, which of the following locations must reference the extension point?\n" +
      "<code:View xmlns:core=”sap.ui.core” xmlns:mvc=”sap.ui.core.mvc” xmlns=”sap.m”\n" +
      "controllerName=”appextension.EmployeeData” xmlns:html=http://www.w3.org/1999/xhtml>\n" +
      "<Page title=”Title”>\n" +
      "<content>\n" +
      "<Label text = “First name:”/>\n" +
      "<Input/>\n" +
      "<core:ExtensionPoint name=”forMiddleName:”/>\n" +
      "<Label text = “Last name:”/>\n" +
      "<Input/>\n" +
      "<Button text=”Get Info” press=”doGetInfo”/>\n" +
      "</content>\n" +
      "</Page>\n" +
      "</core:View>",
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
      "In SAP Fiori, which tool is specifically designed to inspect UI elements and their properties during\n" +
      "runtime?",
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
      "Which of the following tools in SAP Fiori provides insights into runtime errors and issues during\n" +
      "application execution?",
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
      "Scenario: A developer is tasked with creating a custom UI element that can be reused across multiple\n" +
      "SAPUI5 applications. This UI element has unique properties and behaviors not available in standard\n" +
      "controls.\n" +
      "Which extensibility approach should the developer use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Custom Controls"],
    wrongAns: ["Component Variants", "Extension Points", "UI Controller Hooks"],
  },
  {
    questionText:
      "Scenario: A developer is creating an SAP Fiori application that fetches data from an SAP S/4HANA\n" +
      "system. The application needs to retrieve, update, and delete records in real-time.\n" +
      "Which of the following would be the most suitable approach for this data handling?",
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
      "An administrator wants to configure the SAP Fiori Launchpad for all users in one client for your S/4HANA\n" +
      "1809 landscape. Which of the following options represents the best way for the administrator to do this?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: [
      "Define settings using transaction /UI2/FLP CUS CONF.",
      "Create a target mapping in a catalog and assign the catalog to all users using roles.",
      "Define settings using transaction /UI2/FLP_SYS CONF.",
    ],
    wrongAns: [
      "Use the configuration file to define URL parameters to enable/disable features when starting the SAP Fiori Launchpad.",
    ],
  },
  {
    questionText:
      "In the code on the screenshot, what is the absolute path of the property to retrieve the City value for the\n" +
      "company Acme Inc?",
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
      "Which of the following is NOT a key capability of the SAP BTP Integration Suite?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Application extension"],
    wrongAns: ["Process integration", "Data intelligence", "API management"],
  },
  {
    questionText:
      "Scenario: A developer is tasked with creating an SAPUI5 application that allows users to interactively\n" +
      "filter and sort a large dataset. Which of the following features of SAPUI5 would be most suitable for this\n" +
      "purpose?",
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
    wrongAns: ["App Update", "Network Connection", "Logon Manager"],
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
      `The configure.xml file is referred to as App Descriptor Its function is to configure web apps and turn
      on plug-ins`,
      `The config-json file is referred to as App Descriptor Its function is to configure ports and turn on
      plug-ins`,
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
    questionText: "What are some of the core design principles of SAP Fiori?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Adaptive", "Role-based"],
    wrongAns: ["Accessibility", "Multi-device support"],
  },
  {
    questionText:
      "In the context of OData, which HTTP method is used to retrieve data from a service?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["GET"],
    wrongAns: ["DELETE", "PUT", "POST"],
  },
  {
    questionText:
      "Scenario: A company wants to ensure that only the HR department has access to certain apps in the SAP\n" +
      "Fiori Launchpad. Which of the following would be used to achieve this requirement?",
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
      "You are creating KPI Design or KPI Modeler Apps using the SAP KPI Framework. Which of the following\n" +
      "sequences is the correct one for this?",
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
    wrongAns: ["Group", "Catalog", "User Preferences"],
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
    questionText:
      "What possible values can be used for the annotation @UI.LineItem.importance?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["MEDIUM", "LOW", "HIGH"],
    wrongAns: ["VERY_HIGH"],
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
    questionText:
      "Scenario: A developer is tasked with creating an SAP Fiori application for inventory management. The company wants to ensure that the application adheres to best practices and provides a consistent user experience.\n" +
      "Which of the following resources would be most beneficial for the developer?",
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
      "What are the two aggregations provided by the sap.m.SplitApp to add page implementation?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["masterPages", "detailPages"],
    wrongAns: ["detail", "infoPage", "mainPages"],
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
      "For which operations will the SAP Gateway server compute and return a new ETag in a response header?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["PUT", "POST"],
    wrongAns: ["DELETE", "GET"],
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
      "Which of the following tools is used to configure and adapt the SAP Fiori Launchpad content, such as\n" +
      "catalogs, groups, and roles?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Launchpad Designer"],
    wrongAns: ["Role Editor", "Theme Designer", "UI5 Inspector"],
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
      "What SAPUI5 control is used as a starting point to implement the initial page?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["sap.m.Input"],
    wrongAns: ["sap.m.List", "sap.m.Select", "sap.m.Table"],
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
];

questionLists
  ? questionLists.push(questions01)
  : (questionLists = [questions01]);
