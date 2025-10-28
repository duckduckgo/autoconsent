import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spiel-des-jahres.de_isf', ['https://www.spiel-des-jahres.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
