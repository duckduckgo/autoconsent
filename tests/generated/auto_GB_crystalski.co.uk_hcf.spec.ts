import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crystalski.co.uk_hcf', ['https://www.crystalski.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
