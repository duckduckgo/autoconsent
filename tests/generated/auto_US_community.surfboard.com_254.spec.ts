import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_community.surfboard.com_254', ['https://community.surfboard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
