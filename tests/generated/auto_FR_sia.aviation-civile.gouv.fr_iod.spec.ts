import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sia.aviation-civile.gouv.fr_iod', ['https://www.sia.aviation-civile.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
