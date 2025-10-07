import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ge.xhamster.desi_7qy', ['https://ge.xhamster.desi/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
