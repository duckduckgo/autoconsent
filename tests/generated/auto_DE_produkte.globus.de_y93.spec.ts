import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte.globus.de_y93', ['https://produkte.globus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
