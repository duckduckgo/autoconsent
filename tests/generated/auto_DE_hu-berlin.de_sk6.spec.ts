import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hu-berlin.de_sk6', ['https://www.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
