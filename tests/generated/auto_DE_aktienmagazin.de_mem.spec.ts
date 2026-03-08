import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aktienmagazin.de_mem', ['https://aktienmagazin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
