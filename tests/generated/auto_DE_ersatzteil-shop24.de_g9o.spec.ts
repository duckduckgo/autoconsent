import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ersatzteil-shop24.de_g9o', ['https://ersatzteil-shop24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
