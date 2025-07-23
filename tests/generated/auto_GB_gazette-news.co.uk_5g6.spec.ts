import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gazette-news.co.uk_5g6', ['https://www.gazette-news.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
