import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chesterstandard.co.uk_v5a', ['https://www.chesterstandard.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
