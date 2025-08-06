import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda-bank-hamburg.de_c66', ['https://www.sparda-bank-hamburg.de/homepage.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
