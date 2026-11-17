import generateCMPTests from '../playwright/runner';

generateCMPTests('wirtualna-polska', [
    'https://www.dobreprogramy.pl/',
    'https://www.abczdrowie.pl/',
    'https://parenting.pl/',
    'https://audioteka.com/',
]);
