import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_dinarrecaps.com_85j', ['https://dinarrecaps.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
