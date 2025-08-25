import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frisonaut.de_xyw', ['https://www.frisonaut.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
