import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simons-ratschlag.de_31i', ['https://simons-ratschlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
