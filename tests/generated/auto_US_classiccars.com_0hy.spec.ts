import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_classiccars.com_0hy', ['https://classiccars.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
