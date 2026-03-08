import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_2fa.hrz.uni-marburg.de_ezd', ['https://2fa.hrz.uni-marburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
