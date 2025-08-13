import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_club.autodoc.de_ihg', ['https://club.autodoc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
