import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_electriccarscheme.com_ovv', ['https://www.electriccarscheme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
