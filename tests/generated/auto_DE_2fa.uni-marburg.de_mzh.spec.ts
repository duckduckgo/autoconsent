import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_2fa.uni-marburg.de_mzh', ['https://2fa.uni-marburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
