import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dorsetecho.co.uk_xxn', ['https://www.dorsetecho.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
