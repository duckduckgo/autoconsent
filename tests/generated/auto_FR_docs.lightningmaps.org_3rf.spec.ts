import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_docs.lightningmaps.org_3rf', ['https://docs.lightningmaps.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
