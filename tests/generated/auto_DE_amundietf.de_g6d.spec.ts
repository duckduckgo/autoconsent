import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_amundietf.de_g6d', ['https://www.amundietf.de/de/professionell'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
