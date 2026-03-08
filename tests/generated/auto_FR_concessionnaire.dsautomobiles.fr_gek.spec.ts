import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_concessionnaire.dsautomobiles.fr_gek', ['https://concessionnaire.dsautomobiles.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
