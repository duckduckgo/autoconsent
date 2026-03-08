import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baumarkt-bgu.de_wja', ['https://baumarkt-bgu.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
