import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_businassist.com_ygy', ['https://businassist.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
