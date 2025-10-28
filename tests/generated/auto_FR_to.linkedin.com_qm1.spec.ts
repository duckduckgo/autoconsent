import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_to.linkedin.com_qm1', ['https://to.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
