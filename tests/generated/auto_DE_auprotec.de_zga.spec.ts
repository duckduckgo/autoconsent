import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auprotec.de_zga', ['https://auprotec.de/de/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
