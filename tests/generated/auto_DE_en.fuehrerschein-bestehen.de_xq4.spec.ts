import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_en.fuehrerschein-bestehen.de_xq4', ['https://en.fuehrerschein-bestehen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
