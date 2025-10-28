import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medicalnewstoday.com_an6', ['https://www.medicalnewstoday.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
