import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_paracelsus.de_oha', ['https://www.paracelsus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
