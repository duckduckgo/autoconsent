import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_northernrailway.co.uk_0', ['https://www.northernrailway.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
