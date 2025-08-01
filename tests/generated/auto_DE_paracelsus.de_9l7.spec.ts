import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_paracelsus.de_9l7', ['https://www.paracelsus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
