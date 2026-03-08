import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_anwaltspraxis-magazin.de_df6', ['https://anwaltspraxis-magazin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
