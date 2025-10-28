import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_alaskaair.com_yyq', ['https://www.alaskaair.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
