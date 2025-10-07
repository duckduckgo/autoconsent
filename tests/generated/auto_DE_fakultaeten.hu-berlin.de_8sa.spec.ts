import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fakultaeten.hu-berlin.de_8sa', ['https://fakultaeten.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
