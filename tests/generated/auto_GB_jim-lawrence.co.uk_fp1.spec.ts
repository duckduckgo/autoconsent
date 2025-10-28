import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jim-lawrence.co.uk_fp1', ['https://www.jim-lawrence.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
