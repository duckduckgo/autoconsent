import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ambetterhealth.com_4mz', ['https://www.ambetterhealth.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
