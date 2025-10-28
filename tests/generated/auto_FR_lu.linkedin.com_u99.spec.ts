import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lu.linkedin.com_u99', ['https://lu.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
