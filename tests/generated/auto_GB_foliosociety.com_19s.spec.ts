import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_foliosociety.com_19s', ['https://www.foliosociety.com/uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
