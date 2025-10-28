import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ambetterhealth.com_054', ['https://www.ambetterhealth.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
