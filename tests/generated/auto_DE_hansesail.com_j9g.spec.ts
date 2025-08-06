import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hansesail.com_j9g', ['https://www.hansesail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
