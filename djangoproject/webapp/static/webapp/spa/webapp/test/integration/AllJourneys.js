jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list
// * All 3 Employees have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"jumpifzero/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"jumpifzero/test/integration/pages/App",
	"jumpifzero/test/integration/pages/Browser",
	"jumpifzero/test/integration/pages/Master",
	"jumpifzero/test/integration/pages/Detail",
	"jumpifzero/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "jumpifzero.view."
	});

	sap.ui.require([
		"jumpifzero/test/integration/MasterJourney",
		"jumpifzero/test/integration/NavigationJourney",
		"jumpifzero/test/integration/NotFoundJourney",
		"jumpifzero/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});