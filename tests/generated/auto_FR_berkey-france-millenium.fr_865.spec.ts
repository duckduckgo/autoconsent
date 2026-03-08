import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_berkey-france-millenium.fr_865', ['https://berkey-france-millenium.fr/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
