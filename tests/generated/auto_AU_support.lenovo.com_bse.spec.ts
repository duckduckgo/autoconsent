import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_support.lenovo.com_bse', ['https://support.lenovo.com/au/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
