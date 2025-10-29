import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rheinische-scheidestaette.de_ud5', ['https://rheinische-scheidestaette.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
