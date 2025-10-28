import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_veganisme.org_aqx', ['https://www.veganisme.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
