import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_telescopes-et-accessoires.fr_jlz', ['https://www.telescopes-et-accessoires.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
