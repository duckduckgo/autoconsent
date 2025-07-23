import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dorsetecho.co.uk_hb5', ['https://www.dorsetecho.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
