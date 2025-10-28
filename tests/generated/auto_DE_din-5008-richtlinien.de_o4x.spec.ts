import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_din-5008-richtlinien.de_o4x', ['https://www.din-5008-richtlinien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
