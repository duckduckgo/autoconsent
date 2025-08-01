import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksbank-goeppingen.de_3ge', ['https://www.volksbank-goeppingen.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
