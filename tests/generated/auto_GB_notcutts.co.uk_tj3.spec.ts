import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_notcutts.co.uk_tj3', ['https://www.notcutts.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
