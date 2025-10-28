import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lettres.sorbonne-universite.fr_c0q', ['https://lettres.sorbonne-universite.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
