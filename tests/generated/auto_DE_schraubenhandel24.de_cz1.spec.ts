import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schraubenhandel24.de_cz1', ['https://www.schraubenhandel24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
