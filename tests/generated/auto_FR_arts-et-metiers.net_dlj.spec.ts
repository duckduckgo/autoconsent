import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arts-et-metiers.net_dlj', ['https://www.arts-et-metiers.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
