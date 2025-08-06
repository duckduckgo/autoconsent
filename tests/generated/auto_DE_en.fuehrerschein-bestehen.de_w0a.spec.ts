import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_en.fuehrerschein-bestehen.de_w0a', ['https://en.fuehrerschein-bestehen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
