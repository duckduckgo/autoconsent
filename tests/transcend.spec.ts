import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
