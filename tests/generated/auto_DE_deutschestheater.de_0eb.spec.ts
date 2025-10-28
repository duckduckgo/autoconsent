import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutschestheater.de_0eb', ['https://www.deutschestheater.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
