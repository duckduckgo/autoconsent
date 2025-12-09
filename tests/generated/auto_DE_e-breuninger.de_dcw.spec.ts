import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_e-breuninger.de_dcw', ['https://www.e-breuninger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
