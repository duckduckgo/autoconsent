import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hacksmith.store_49t', ['https://hacksmith.store/en-no'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
