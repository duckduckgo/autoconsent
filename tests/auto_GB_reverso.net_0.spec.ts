import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_reverso.net_0', ['https://www.reverso.net/text-translation'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
