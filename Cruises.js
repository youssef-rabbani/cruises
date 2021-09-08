/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});
qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });

	

	//callbacks -- inserted here --
	//open apps -- inserted here --
    

	var app1 = qlik.openApp('Cruises.qvf', config);


	//get objects -- inserted here --
	app1.getObject('QV-54-1','JpJY');
	app1.getObject('QV-YA','qJVkz');
	
	
	app1.getObject('QV-7','a700264e-5e37-4734-94df-a241d8647299');
	
	app1.getObject('QV-1','fe5548b3-7bb3-4d92-a441-dfc38e09da63');
	
	
	app1.getObject('QV-RD1','8f8f9207-9f78-4114-bf28-cad52b807af9');
	app1.getObject('QV-Y','b8a5ac6f-fcee-4c46-b9c1-d5fee8c49452');
	app1.getObject('QV-45','hfkVAx');
	app1.getObject('QV-25','RYxge');
	app1.getObject('QV-23','hrzpBC');
	app1.getObject('QV-21','bnLE');
	app1.getObject('QV-29','66dabc23-6316-4110-bfb3-138b3d6a0111');
	app1.getObject('QV-22','2f66a2a4-768f-4ca6-9e21-833e14dc20fd');
	app1.getObject('QV-28','2f66a2a4-768f-4ca6-9e21-833e14dc20fd');
	app1.getObject('QV-26','bc267ec3-7f49-4d87-9603-1657b02b934e');
	app1.getObject('QV-24','1d4d1147-1793-44a7-9405-b2162f4e2a3a');
	app1.getObject('QV-12','aec503b9-8a96-44f6-a0a5-a570e8305aea');
	app1.getObject('QV-10','aec503b9-8a96-44f6-a0a5-a570e8305aea');
	app1.getObject('QV-8','4ba3d7d8-ea74-4dc1-8a09-ac121f82d128');
	app1.getObject('QV-20','9924fec0-185e-4354-99a2-b6e3f1c10f66');
	app1.getObject('QV-18','10df55f5-ce6d-4d24-b224-a78d1d873d96');
	app1.getObject('QV-16','9a22c88d-1068-4d23-9da9-c69d7e6e1cb2');
	app1.getObject('QV-14','d6b477d0-b2ee-4f0d-9b61-27d1d96cf9f2');
	app1.getObject('QV-3-9c','UHNKWk');
	app1.getObject('QV-3-9b','ksvmgDA');
	app1.getObject('QV-Y3','c708cbdb-32bd-4d07-a5c1-9f89c230000c');
	app1.getObject('QV-Y2','1d05c3fb-bfe2-40db-ae80-4b0667e276bd');
	app1.getObject('QV-Y1','8861e3b4-d546-420c-9133-c56cde3cfa8f');
	app1.getObject('QV-Z1','eaf7a1f7-63e9-4dda-9a3b-94d9e19060e0');
	app1.getObject('QV-Z3','d2185787-ee8c-4d17-b246-a8d2725ed90c');
	app1.getObject('QV-Z2','6e1eb007-3ee0-4d4d-9ac3-744a6976aa6d');
	
	
	
	
	
	
	
	
	
	app1.getObject('QV-Z','81765e41-826f-443d-bef7-52f8d577ba9c');
	app1.getObject('QV-11','d2b8d65f-76c4-4777-8702-af49eea1ed52');
	app1.getObject('QV-9','2f6f6b5f-76c1-4b87-a306-f87938d74685');
	
	app1.getObject('QV-6-a','3cbc6c10-d371-4b03-8af8-09b053318867');
	app1.getObject('QV-62','4e1e8f91-2990-43a2-a005-99145cb67601');
	app1.getObject('QV-30','MPJLh');
	
	
	app1.getObject('QV-31','abe01ff5-ac78-416b-b91e-2ddb8bb37160');
	
	
	
	
	
	
	
	
	app1.getObject('QV-63','01e9b859-ff77-4d10-b4c0-c66ecb2eae76');
	
	
	
	
	
	
	
	
	
	
	
	app1.getObject('QV-33','TJPDT');
	
	
	
	
	app1.getObject('QV-5-a','f2078d42-bdb7-4f70-bc40-91346ee2e19f');
	app1.getObject('QV-4-a','0294ee2a-9bdc-4e2b-a142-2a41fbb06458');
	app1.getObject('QV-3-a','b3d088b8-0d84-43b1-82d9-a2ff8273b72a');
	
	
	app1.getObject('QV-3','jmvVB');
	
	app1.getObject('QV-15','GpjyyFL');
	
	app1.getObject('QV-13','8c55d4fa-4446-4c67-b2c7-eaa420550c41');
	app1.getObject('QV-19','15bc0712-ec5f-43e5-87b7-5c32c507eda8');
	app1.getObject('QV-17','13f40180-5af5-414d-b81c-0113e6b627e9');
	app1.getObject('QV-6','cd4fea81-2c6c-4dcb-ab8e-fe7f8f0e390a');
	app1.getObject('QV-21','');
	
	app1.getObject('QV-27','');
	app1.getObject('QV-22','');
	
	app1.getObject('QV-5','0cc1d623-faa7-4f0e-b2af-1bd5e1b5581c');
	app1.getObject('QV-4','WxdBzv');
	app1.getObject('QV-2-a','YVsfxx');
	app1.getObject('QV-1-a','ZEp');
	app1.getObject('QV-2','hGphpyL');
	
	
	app1.getObject('QV-12','');
	
	
	
	
	
	app1.getObject('QV-26b-c','');
	app1.getObject('QV-26b-b','');
	app1.getObject('QV-26b-a','');
	
$(".btn-round").click(function() {
			qlik.resize();
		});
	//create cubes and lists -- inserted here --

	if (app1) {
	

	$(".btn-round").click(function(){
	qlik.resize();
	});

		app1.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
