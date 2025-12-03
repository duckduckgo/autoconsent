import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ancestry.co.uk_0', ['https://www.ancestry.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
