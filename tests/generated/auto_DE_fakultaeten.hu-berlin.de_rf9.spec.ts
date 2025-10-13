import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fakultaeten.hu-berlin.de_rf9', ['https://fakultaeten.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
