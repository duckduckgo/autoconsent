import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hs-niederrhein.de_ixo', ['https://www.hs-niederrhein.de/startseite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
