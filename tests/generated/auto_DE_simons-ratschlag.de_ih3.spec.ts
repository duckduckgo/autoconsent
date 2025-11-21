import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simons-ratschlag.de_ih3', ['https://simons-ratschlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
