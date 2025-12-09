import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidneyresearchuk.org_fr1', ['https://www.kidneyresearchuk.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
