import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theboltonnews.co.uk_blb', ['https://www.theboltonnews.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
