import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meilleurduchef.com_t0r', ['https://www.meilleurduchef.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
