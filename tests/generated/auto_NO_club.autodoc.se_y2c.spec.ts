import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_club.autodoc.se_y2c', ['https://club.autodoc.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
