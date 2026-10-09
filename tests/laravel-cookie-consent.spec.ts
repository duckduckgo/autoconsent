import generateCMPTests from '../playwright/runner';

generateCMPTests('laravel-cookie-consent', [
    'https://podstatus.com/',
    'https://www.arzneimittel-datenbank.de/',
    'https://www.opendag.no/',
    'https://teatenerife.es/',
    'https://radacini.ro/',
    'https://30cc.be/',
]);
