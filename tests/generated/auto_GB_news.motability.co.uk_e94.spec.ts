import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_news.motability.co.uk_e94', ['https://news.motability.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
