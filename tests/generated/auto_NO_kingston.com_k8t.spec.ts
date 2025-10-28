import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kingston.com_k8t', ['https://www.kingston.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
