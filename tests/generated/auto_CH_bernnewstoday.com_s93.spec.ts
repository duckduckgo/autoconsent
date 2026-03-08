import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bernnewstoday.com_s93', ['https://bernnewstoday.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
