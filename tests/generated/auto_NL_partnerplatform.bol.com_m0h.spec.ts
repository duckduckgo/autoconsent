import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_partnerplatform.bol.com_m0h', ['https://partnerplatform.bol.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
