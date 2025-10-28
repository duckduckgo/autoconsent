import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_presse-citron.net_hqe', ['https://www.presse-citron.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
