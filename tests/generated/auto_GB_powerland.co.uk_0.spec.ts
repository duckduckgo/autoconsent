import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_powerland.co.uk_0', ['https://www.powerland.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
