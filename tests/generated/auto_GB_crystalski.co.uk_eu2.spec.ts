import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crystalski.co.uk_eu2', ['https://www.crystalski.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
