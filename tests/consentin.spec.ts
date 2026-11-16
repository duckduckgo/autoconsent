import generateCMPTests from '../playwright/runner';

generateCMPTests('consentin', [
    'https://www.sbicard.com/',
    'https://www.tatacard.com/',
    'https://www.iiflcapital.com/',
    'https://gaadibazaar.co.in/',
]);
