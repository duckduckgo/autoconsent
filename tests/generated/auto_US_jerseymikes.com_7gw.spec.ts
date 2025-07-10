import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jerseymikes.com_7gw', ['https://www.jerseymikes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
