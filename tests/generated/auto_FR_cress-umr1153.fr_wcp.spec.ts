import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cress-umr1153.fr_wcp', ['https://cress-umr1153.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
