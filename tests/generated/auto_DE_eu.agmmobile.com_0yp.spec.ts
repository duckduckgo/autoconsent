import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eu.agmmobile.com_0yp', ['https://eu.agmmobile.com/de/germany/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
