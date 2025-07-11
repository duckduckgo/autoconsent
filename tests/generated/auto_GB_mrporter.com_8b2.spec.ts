import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mrporter.com_8b2', ['https://www.mrporter.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
