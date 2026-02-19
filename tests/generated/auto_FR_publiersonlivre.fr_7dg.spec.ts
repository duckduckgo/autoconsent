import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_publiersonlivre.fr_7dg', ['https://publiersonlivre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
