import generateCMPTests from '../playwright/runner';

generateCMPTests('autoscout24', [
    'https://www.autoplenum.de/',
    'https://www.autoscout24.com/',
    'https://www.autoscout24.de/',
    'https://www.autoscout24.at/',
    'https://www.autoscout24.it/',
    'https://www.autoscout24.es/',
    'https://www.12neuwagen.de/',
    'https://www.12gebrauchtwagen.de/',
    'https://www.gebrauchtwagen.at/',
    'https://www.autotrader.nl/',
]);
