import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cohebergement.com_reh', ['https://www.cohebergement.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
