import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ambetterhealth.com_0cb', ['https://www.ambetterhealth.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
