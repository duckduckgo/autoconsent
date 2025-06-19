import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_foliosociety.com_9t5', ['https://www.foliosociety.com/uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
