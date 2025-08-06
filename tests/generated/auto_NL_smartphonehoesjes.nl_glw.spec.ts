import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_smartphonehoesjes.nl_glw', ['https://www.smartphonehoesjes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
