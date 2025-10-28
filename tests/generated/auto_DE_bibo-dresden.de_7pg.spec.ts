import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bibo-dresden.de_7pg', ['https://www.bibo-dresden.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
