import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_swp-berlin.org_b8v', ['https://www.swp-berlin.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
