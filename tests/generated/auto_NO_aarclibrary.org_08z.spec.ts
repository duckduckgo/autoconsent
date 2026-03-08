import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aarclibrary.org_08z', ['https://aarclibrary.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
