import generateCMPTests from '../playwright/runner';

generateCMPTests('jtl-shop', [
    'https://www.mueller-spring.ch/',
    'https://www.snogard.de/',
    'https://www.kartons24.de/',
    'https://www.zarendom.de/',
    'https://www.garnwelt.de/',
]);
