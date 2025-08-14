import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arbetsformedlingen.se_wxz', ['https://arbetsformedlingen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
