import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_telescopes-et-accessoires.fr_9fo', ['https://www.telescopes-et-accessoires.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
