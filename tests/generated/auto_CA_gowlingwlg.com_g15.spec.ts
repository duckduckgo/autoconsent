import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gowlingwlg.com_g15', ['https://gowlingwlg.com/en-ca'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
