import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wohin-und-wann.de_6f8', ['https://www.wohin-und-wann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
