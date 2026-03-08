import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cdc2026.ieeecss.org_rfp', ['https://cdc2026.ieeecss.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
