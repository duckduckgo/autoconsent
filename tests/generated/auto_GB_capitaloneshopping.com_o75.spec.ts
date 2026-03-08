import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_capitaloneshopping.com_o75', ['https://capitaloneshopping.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
