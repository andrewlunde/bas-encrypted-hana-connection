# Create a new Encrypted HANA Connection inside SAP Business Application Studio

## Description

This command line tool.

```
mkdir -p ~/.ssl ; cd ~/.ssl ; wget https://dl.cacerts.digicert.com/DigiCertGlobalRootCA.crt ; openssl x509 -inform der -in DigiCertGlobalRootCA.crt -out ~/.ssl/DigiCertGlobalRootCA.pem ; cd ~
```

```
        {
                "dialect": "SAPHana",
                "port": 20217,
                "server": "zeus.hana.prod.us-east-1.whitney.dbaas.ondemand.com",
                "name": "
                ",
                "database": "CONCILE_COM_V0_DEV",
                "username": "CONCILE_COM_V0_DEV_BAIMZRXVZ29273G96X031ZXB3_RT",
                "password": "Ks0X.o.ZzesOo4HaqGJDXG7bsiLxID4kDNQ9wBBGYhSEG.KmYzmKgZRxdyJHs2dR_lEFWvkmc1axRSQRthJyjib-5.5it09RqER86pxwo1espulTsFpd0qy14vf3pdUZ",
                "hanaOptions": {
                    "encrypt": true,
                    "sslValidateCertificate": true,
                    "sslCryptoProvider": "openssl",
                    "sslTrustStore": "/home/user/.ssl/DigiCertGlobalRootCA.pem"
                },
                "isActive":&nbspfalse,
                "isConnected":&nbspfalse
        }
```

## Requirements / Download and Installation

* Install Node.js version 10.x or 12.x on your development machine [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

* Add the SAP Registry to your NPM configuration

```shell
npm config set @sap:registry=https://npm.sap.com
```

* Clone the repository from [https://https://github.com/andrewlunde/bas-encrypted-hana-connection](https://github.com/andrewlunde/bas-encrypted-hana-connection)

```shell
git clone https://github.com/andrewlunde/bas-encrypted-hana-connection
```

* Run NPM install from the root of the hana-developer-cli-tool-example project you just cloned to download dependencies

```shell
npm install
```

* Run NPM link from the cloned project root to make the enc-hana-conn command available from everywhere [https://docs.npmjs.com/cli/link](https://docs.npmjs.com/cli/link)

```shell
npm link
```

Or if you would rather just access the tool directly, it is now available in npm directly. You can install via:

```shell
npm install -g bas-enc-hana-conn
```

## Security

## Examples

## How to obtain support

This project is provided "as-is": there is no guarantee that raised issues will be answered or addressed in future releases.

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
This project is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE](LICENSE) file.
