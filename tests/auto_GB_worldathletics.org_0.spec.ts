import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_worldathletics.org_0', ['https://worldathletics.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
