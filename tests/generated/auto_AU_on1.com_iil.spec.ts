import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_on1.com_iil', ['https://www.on1.com/company/privacy/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
