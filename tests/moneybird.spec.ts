import generateCMPTests from '../playwright/runner';

generateCMPTests('moneybird', [
    'https://www.moneybird.nl/',
    'https://www.moneybird.com/',
    'https://www.moneybird.de/',
    'https://www.moneybird.be/',
]);
