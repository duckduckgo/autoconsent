import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alle-bedienungsanleitungen.de_7ql', ['https://www.alle-bedienungsanleitungen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
