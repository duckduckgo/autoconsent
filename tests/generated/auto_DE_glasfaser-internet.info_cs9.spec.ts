import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_glasfaser-internet.info_cs9', ['https://www.glasfaser-internet.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
