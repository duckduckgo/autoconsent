import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidneyresearchuk.org_bb3', ['https://www.kidneyresearchuk.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
