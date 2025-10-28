import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundesverbraucherhilfe.de_brz', ['https://www.bundesverbraucherhilfe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
