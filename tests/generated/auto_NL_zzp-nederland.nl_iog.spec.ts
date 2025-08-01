import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zzp-nederland.nl_iog', ['https://www.zzp-nederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
