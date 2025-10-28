import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_na.finalfantasyxiv.com_k3o', ['https://na.finalfantasyxiv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
