import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_whatsmyname.app_ozc', ['https://www.whatsmyname.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
