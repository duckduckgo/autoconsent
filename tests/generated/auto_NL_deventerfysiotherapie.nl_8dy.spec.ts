import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deventerfysiotherapie.nl_8dy', ['https://deventerfysiotherapie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
