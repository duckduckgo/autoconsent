import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_club.autodoc.de_pye', ['https://club.autodoc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
