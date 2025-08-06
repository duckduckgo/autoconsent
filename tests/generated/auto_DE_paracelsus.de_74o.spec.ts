import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_paracelsus.de_74o', ['https://www.paracelsus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
