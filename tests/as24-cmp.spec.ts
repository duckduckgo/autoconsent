import generateCMPTests from '../playwright/runner';

generateCMPTests('as24-cmp', [
    'https://www.autoscout24.com/',
    'https://www.autoscout24.de/',
    'https://www.autoplenum.de/',
    'https://www.gebrauchtwagen.at/',
    'https://www.autotrader.nl/',
]);
