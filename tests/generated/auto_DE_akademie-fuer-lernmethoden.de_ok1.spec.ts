import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_akademie-fuer-lernmethoden.de_ok1', ['https://akademie-fuer-lernmethoden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
