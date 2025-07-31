import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidneyresearchuk.org_gah', ['https://www.kidneyresearchuk.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
