import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cloud.telekom-dienste.de_a9v', ['https://cloud.telekom-dienste.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
