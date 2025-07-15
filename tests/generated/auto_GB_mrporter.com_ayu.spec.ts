import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mrporter.com_ayu', ['https://www.mrporter.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
