import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sia.aviation-civile.gouv.fr_a4i', ['https://www.sia.aviation-civile.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
