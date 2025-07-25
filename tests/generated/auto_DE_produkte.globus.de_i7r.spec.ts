import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte.globus.de_i7r', ['https://produkte.globus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
