import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_passeport.ants.gouv.fr_36c', ['https://passeport.ants.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
