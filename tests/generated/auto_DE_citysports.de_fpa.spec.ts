import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_citysports.de_fpa', ['https://www.citysports.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
