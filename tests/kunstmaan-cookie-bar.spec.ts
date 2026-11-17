import generateCMPTests from '../playwright/runner';

generateCMPTests('kunstmaan-cookie-bar', [
    'https://www.meteo.be/',
    'https://www.will.be/',
    'https://www.antwerpenherdenkt.be/',
    'https://play.street-smart.be/',
]);
