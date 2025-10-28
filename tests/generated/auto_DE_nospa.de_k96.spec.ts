import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nospa.de_k96', ['https://www.nospa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
