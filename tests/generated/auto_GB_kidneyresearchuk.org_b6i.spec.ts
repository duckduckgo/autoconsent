import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidneyresearchuk.org_b6i', ['https://www.kidneyresearchuk.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
