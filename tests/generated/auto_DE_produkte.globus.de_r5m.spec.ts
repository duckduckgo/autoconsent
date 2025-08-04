import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte.globus.de_r5m', ['https://produkte.globus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
