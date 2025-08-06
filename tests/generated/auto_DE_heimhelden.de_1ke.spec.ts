import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heimhelden.de_1ke', ['https://www.heimhelden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
