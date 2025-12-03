import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_globus.de_b52', ['https://www.globus.de/maerkte.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
