import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centres.norauto.fr_b8w', ['https://centres.norauto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
