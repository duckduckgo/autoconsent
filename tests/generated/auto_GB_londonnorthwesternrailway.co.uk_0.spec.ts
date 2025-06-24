import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_londonnorthwesternrailway.co.uk_0', ['https://www.londonnorthwesternrailway.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
