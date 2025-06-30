import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_support.lenovo.com_om8', ['https://support.lenovo.com/au/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
