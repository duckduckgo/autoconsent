import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dictionnaire-academie.fr_uzr', ['https://www.dictionnaire-academie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
