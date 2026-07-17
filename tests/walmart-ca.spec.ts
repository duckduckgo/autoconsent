import generateCMPTests from '../playwright/runner';

generateCMPTests('walmart-ca', ['https://www.walmart.ca/en'], {
    mobile: true,
    testOptIn: false,
});
