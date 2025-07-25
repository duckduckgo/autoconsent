import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_excel-downloads.com_dr5', ['https://excel-downloads.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
