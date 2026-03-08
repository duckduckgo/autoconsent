import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_db-seiltechnik.de_rcu', ['https://db-seiltechnik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
