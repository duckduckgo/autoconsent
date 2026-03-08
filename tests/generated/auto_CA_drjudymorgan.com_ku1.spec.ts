import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_drjudymorgan.com_ku1', ['https://drjudymorgan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
