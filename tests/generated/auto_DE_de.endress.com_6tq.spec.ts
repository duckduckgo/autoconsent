import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.endress.com_6tq', ['https://www.de.endress.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
