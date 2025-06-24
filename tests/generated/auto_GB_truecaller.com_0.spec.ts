import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_truecaller.com_0', ['https://www.truecaller.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
