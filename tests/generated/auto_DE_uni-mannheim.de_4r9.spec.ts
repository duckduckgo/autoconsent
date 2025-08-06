import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-mannheim.de_4r9', ['https://www.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
