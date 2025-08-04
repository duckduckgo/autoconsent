import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte.globus.de_9ye', ['https://produkte.globus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
