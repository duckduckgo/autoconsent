import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gowlingwlg.com_6iv', ['https://gowlingwlg.com/en-ca'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
