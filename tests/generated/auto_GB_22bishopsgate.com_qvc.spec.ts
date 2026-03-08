import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_22bishopsgate.com_qvc', ['https://22bishopsgate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
