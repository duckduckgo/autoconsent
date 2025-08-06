import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centres.norauto.fr_l57', ['https://centres.norauto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
