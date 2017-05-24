jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"jumpifzero/test/integration/NavigationJourneyPhone",
		"jumpifzero/test/integration/NotFoundJourneyPhone",
		"jumpifzero/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});