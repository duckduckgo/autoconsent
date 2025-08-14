import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mieterhilfeverein.de_p23', ['https://www.mieterhilfeverein.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
