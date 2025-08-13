import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maas-natur.de_tbp', ['https://www.maas-natur.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
