import generateCMPTests from '../playwright/runner';

const urls = [
    'https://services.dataexchange.fiscloudservices.com/LogOn/1309821/3438949/5024536/5039357',
    'https://services.dataexchange.fiscloudservices.com/LogOn/2622938',
    'https://services.dataexchange.fiscloudservices.com/LogOn/1964272',
];

generateCMPTests('fis-data-exchange', urls);
