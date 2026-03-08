import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aymanalazraq.com_nzn', ['https://aymanalazraq.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
