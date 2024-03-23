const questions02 = [
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
    questionText:
      "What makes a standard UI control to be named as a complex control?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Aggregations", "Associations"],
    wrongAns: ["Values", "Properties"],
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
      "Which tool can you use to generate SAPUI5 coding that is based on prototypes?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP WEB IDE"],
    wrongAns: ["SAP Build", "Adobe Flash", "UI Theme Designer"],
  },
  {
    questionText: "What OData versions are currently supported by SAPUI5?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["OData V2", "OData V4"],
    wrongAns: ["OData V7", "OData V5"],
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
      "An administrator wants to configure the SAP Fiori Launchpad for all users in one client for your S/4HANA 1809 landscape. Which of the following options represents the best way for the administrator to do this?",
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
      "Which of the following is NOT a key capability of the SAP BTP Integration Suite?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Application extension"],
    wrongAns: ["API management", "Process integration", "Data intelligence"],
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
    questionText:
      "To generate SAPUI5 coding that is based on prototypes, which tool do you use?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAP WEB IDE"],
    wrongAns: ["UI Theme Designer", "SAP BUILD", "SPLASH"],
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
      "To perform a QUnit test, what do you include in a test page under your webapp folder?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["SAPUI5 bootstrap code"],
    wrongAns: ["OPA function", "Mock code", "Stub code"],
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
      "What are the main configuration objects of the routing configuration?",
    questionHint: "There are 3 correct answers to this question.",
    correctAns: ["config", "targets", "routes"],
    wrongAns: ["routing"],
  },
  {
    questionText:
      "Which HTTP request methods does the SAP Gateway server use to compute and return a new eTag in a response header?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["DELETE", "POST"],
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
      "Scenario: A company is migrating its application development environment to the cloud. They want a tool that offers a modern development experience with pre-configured development environments.\n" +
      "Which of the following SAP tools would be most suitable for this purpose?",
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
      "You need to configure an SAP Destination service to enable SAP Business Application Studio to extend an existing SAP Fiori app. Which configuration setting for the WebIDEUsage property is required?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["extend_abap"],
    wrongAns: ["ui5_execute_abap", "dev_abap", "odata_abap"],
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
      "Which element in the SAPUI5 architecture holds the data in JSON or XML?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Model"],
    wrongAns: ["Controller", "Component", "View"],
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
      "Scenario: A developer is creating an SAPUI5 application that needs to display a list of products. The data for the products is stored in a remote server.\n" +
      "Which of the following would be the most suitable approach to fetch and display this data?",
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
      "Scenario: A developer is tasked with customizing the appearance and branding of the SAP Fiori Launchpad to align with the company's corporate identity.\n" +
      "Which of the following tools or features would facilitate this customization?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["Launchpad Designer", "Theme Designer"],
    wrongAns: ["UI5 Inspector", "Role Editor"],
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
      "You are extending an SAP Fiori app. Which of the extension properties are defined in the manifest.json?",
    questionHint: "There are 2 correct answers to this question.",
    correctAns: ["sap.ui.viewModifications", "sap.ui.controllerExtensions"],
    wrongAns: ["sap.ui.modelModifications", "sap.ui.i18nModifications"],
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
      "Which of the following components in the SAP Fiori architecture is responsible for defining the data model and business logic for SAP Fiori apps?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["Back-end server"],
    wrongAns: ["Gateway server", "OData service", "Front-end server"],
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
    questionText:
      "In the context of OData, which HTTP method is used to retrieve data from a service?",
    questionHint: "Please choose the correct answer.",
    correctAns: ["GET"],
    wrongAns: ["POST", "DELETE", "PUT"],
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
];

questionLists
  ? questionLists.push(questions02)
  : (questionLists = [questions02]);
