import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda-west.de_c96', ['https://www.sparda-west.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
