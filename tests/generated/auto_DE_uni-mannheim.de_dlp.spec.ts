import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-mannheim.de_dlp', ['https://www.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
