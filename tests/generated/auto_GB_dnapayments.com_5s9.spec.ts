import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dnapayments.com_5s9', ['https://dnapayments.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
