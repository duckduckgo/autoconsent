import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lotto-niedersachsen.de_yrf', ['https://www.lotto-niedersachsen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
