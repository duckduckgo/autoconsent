import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.aisne.fr_pru', ['https://archives.aisne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
