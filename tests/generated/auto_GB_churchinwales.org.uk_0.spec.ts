import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_churchinwales.org.uk_0', ['https://www.churchinwales.org.uk/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
