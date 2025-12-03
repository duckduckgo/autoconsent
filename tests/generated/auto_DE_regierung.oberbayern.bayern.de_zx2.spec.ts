import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.oberbayern.bayern.de_zx2', ['https://www.regierung.oberbayern.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
