import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pharmaphant.de_9dn', ['https://www.pharmaphant.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
