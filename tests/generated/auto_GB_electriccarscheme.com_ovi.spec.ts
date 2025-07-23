import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_electriccarscheme.com_ovi', ['https://www.electriccarscheme.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
