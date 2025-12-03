import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meilleurduchef.com_pud', ['https://www.meilleurduchef.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
