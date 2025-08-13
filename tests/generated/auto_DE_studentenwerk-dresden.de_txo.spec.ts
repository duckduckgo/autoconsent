import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_studentenwerk-dresden.de_txo', ['https://www.studentenwerk-dresden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
