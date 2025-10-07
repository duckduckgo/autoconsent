import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ge.xhamster.desi_65f', ['https://ge.xhamster.desi/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
