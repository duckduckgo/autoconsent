import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_putzgeheimnis.de_7cc', ['https://www.putzgeheimnis.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
