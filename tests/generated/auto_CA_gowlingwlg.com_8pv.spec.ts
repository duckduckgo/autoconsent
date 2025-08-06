import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gowlingwlg.com_8pv', ['https://gowlingwlg.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
