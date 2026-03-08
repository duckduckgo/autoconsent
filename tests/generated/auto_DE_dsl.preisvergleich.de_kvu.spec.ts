import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dsl.preisvergleich.de_kvu', ['https://dsl.preisvergleich.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
