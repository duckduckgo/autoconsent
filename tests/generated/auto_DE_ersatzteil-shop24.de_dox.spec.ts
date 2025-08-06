import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ersatzteil-shop24.de_dox', ['https://ersatzteil-shop24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
