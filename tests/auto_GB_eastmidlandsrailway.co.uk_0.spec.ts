import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_eastmidlandsrailway.co.uk_0', ['https://www.eastmidlandsrailway.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
