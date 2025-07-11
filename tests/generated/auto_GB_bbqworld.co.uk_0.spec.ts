import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bbqworld.co.uk_0', ['https://www.bbqworld.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
