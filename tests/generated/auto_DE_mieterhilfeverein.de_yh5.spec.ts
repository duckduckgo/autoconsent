import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mieterhilfeverein.de_yh5', ['https://www.mieterhilfeverein.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
