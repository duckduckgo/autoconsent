import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mh.linkedin.com_unn', ['https://mh.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
