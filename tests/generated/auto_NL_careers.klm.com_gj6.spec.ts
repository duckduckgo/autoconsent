import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_careers.klm.com_gj6', ['https://careers.klm.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
