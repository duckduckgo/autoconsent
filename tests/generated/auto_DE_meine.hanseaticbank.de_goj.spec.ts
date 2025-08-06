import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meine.hanseaticbank.de_goj', ['https://meine.hanseaticbank.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
