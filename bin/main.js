#!/usr/bin/env node
/*eslint no-console: 0, no-process-exit:0*/
/*eslint-env node, es6, module */

// console.log(argv);
console.log("Run the following commands.");

console.log("mkdir -p ~/.ssl ; cd ~/.ssl");
console.log("wget https://dl.cacerts.digicert.com/DigiCertGlobalRootCA.crt");
console.log("openssl x509 -inform der -in DigiCertGlobalRootCA.crt -out ~/.ssl/DigiCertGlobalRootCA.pem");
console.log("cd ~");

console.log("");

console.log("Add a new SQL Tools SAP Hana Connect with any values and save it.");
console.log("");

console.log("Edit ~/.theia/settings.json and replace the json sqltools.connections with this template, substituting your values for port/server/name/database/username/password.");
console.log("");

console.log("vim ~/.theia/settings.json");
console.log("");

console.log("--or--");
console.log("Go to File-Settings-Open Preferences.  Find the sqltools.connections element and replace it with this.");
console.log('\n'+
'"sqltools.connections": [\n'+
'  {\n'+
'     "dialect": "SAPHana",\n'+
'     "port": 20217,\n'+
'     "server": "zeus.hana.prod.us-east-1.whitney.dbaas.ondemand.com",\n'+
'     "name": "HANA_Encrypted",\n'+
'     "database": "BECT_DB",\n'+
'     "username": "BECT_DB_6USCB41HPEXXDTM6VYZ32LQS1_RT",\n'+
'     "password": "Zt5ZszJ32zMgeXu2wEY44bSFLG.Gm_6nM2HdaVIIlLGltpaOL9UCMGnl0bvmptg--V9CvocYuE2BHGVi9WcN34zbigLXegStkNsSDqYtmGeXlxMvBkJldUMo9RAHkv0P",\n'+
'     "hanaOptions": {\n'+
'         "encrypt": true,\n'+
'         "sslValidateCertificate": true,\n'+
'         "sslCryptoProvider": "openssl",\n'+
'         "sslTrustStore": "/home/user/.ssl/DigiCertGlobalRootCA.pem"\n'+
'      },\n'+
'      "isActive": false,\n'+
'      "isConnected": false\n'+
'  }\n'+
']\n'
);
