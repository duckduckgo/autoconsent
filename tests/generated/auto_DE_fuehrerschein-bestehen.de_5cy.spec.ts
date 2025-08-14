import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fuehrerschein-bestehen.de_5cy', ['https://en.fuehrerschein-bestehen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
