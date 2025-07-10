import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crystalski.co.uk_2vp', ['https://www.crystalski.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
