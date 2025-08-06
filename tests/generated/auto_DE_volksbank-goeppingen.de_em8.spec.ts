import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksbank-goeppingen.de_em8', ['https://www.volksbank-goeppingen.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
