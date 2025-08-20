import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_infinitecampus.com_u88', ['https://www.infinitecampus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
