import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regierung.oberbayern.bayern.de_xoy', ['https://www.regierung.oberbayern.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
