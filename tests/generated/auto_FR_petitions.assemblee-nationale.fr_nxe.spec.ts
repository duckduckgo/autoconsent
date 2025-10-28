import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_petitions.assemblee-nationale.fr_nxe', ['https://petitions.assemblee-nationale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
