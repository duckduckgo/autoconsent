import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_studentenwerk-leipzig.de_5sc', ['https://www.studentenwerk-leipzig.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
