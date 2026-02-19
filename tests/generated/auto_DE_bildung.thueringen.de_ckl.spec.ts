import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bildung.thueringen.de_ckl', ['https://bildung.thueringen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
