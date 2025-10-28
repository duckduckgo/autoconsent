import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elektrikerwissen.de_15g', ['https://www.elektrikerwissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
