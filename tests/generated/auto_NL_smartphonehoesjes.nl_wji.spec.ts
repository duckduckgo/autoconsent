import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_smartphonehoesjes.nl_wji', ['https://www.smartphonehoesjes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
