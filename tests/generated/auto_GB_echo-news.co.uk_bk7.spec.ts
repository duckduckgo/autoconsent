import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_echo-news.co.uk_bk7', ['https://www.echo-news.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
