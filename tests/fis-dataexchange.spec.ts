import generateCMPTests from '../playwright/runner';

generateCMPTests('fis-dataexchange', [
    'https://services.dataexchange.fiscloudservices.com/LogOn/1309821/3438949/5024536/5039357',
    'https://services.dataexchange-eu.fiscloudservices.com/LogOn/138137',
]);
