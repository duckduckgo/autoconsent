import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidneyresearchuk.org_c6w', ['https://www.kidneyresearchuk.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
