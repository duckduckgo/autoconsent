import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mangerbouger.fr_9bv', ['https://www.mangerbouger.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
