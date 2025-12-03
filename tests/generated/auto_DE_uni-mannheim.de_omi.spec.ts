import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-mannheim.de_omi', ['https://www.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
