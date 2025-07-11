import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_laronde.com_tua', ['https://www.laronde.com/larondefr'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
