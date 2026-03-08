import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_beton-guide.com_bqm', ['https://beton-guide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
