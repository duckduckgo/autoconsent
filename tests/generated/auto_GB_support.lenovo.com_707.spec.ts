import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_support.lenovo.com_707', ['https://support.lenovo.com/gb/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
