import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_glasgowfilm.org_z9k', ['https://www.glasgowfilm.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
