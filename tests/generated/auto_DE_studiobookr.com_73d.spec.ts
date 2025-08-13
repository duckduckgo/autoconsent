import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_studiobookr.com_73d', ['https://www.studiobookr.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
