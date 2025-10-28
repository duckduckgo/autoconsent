import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dromadaire.com_6j0', ['https://www.dromadaire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
