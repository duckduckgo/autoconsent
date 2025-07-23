import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newsandstar.co.uk_wa8', ['https://www.newsandstar.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
