import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_essentiels.bnf.fr_z16', ['https://essentiels.bnf.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
