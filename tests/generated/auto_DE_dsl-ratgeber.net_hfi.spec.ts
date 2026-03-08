import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dsl-ratgeber.net_hfi', ['https://dsl-ratgeber.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
