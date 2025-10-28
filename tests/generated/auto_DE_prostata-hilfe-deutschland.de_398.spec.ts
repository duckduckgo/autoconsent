import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_prostata-hilfe-deutschland.de_398', ['https://www.prostata-hilfe-deutschland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
