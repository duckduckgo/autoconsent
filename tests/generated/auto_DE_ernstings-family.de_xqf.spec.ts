import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ernstings-family.de_xqf', ['https://www.ernstings-family.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
