import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_th-luebeck.de_zvz', ['https://www.th-luebeck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
