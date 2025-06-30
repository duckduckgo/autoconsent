import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_support.lenovo.com_6kt', ['https://support.lenovo.com/gb/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
