import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte.globus.de_k92', ['https://produkte.globus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
