import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.milwaukeetool.eu_4zu', ['https://fr.milwaukeetool.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
