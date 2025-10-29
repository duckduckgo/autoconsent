import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dachbaustoffe.de_z4e', ['https://www.dachbaustoffe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
