import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_news.bet365.com_0', ['https://news.bet365.com/en-gb'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
