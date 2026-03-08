import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.ardeche.fr_6cq', ['https://archives.ardeche.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
