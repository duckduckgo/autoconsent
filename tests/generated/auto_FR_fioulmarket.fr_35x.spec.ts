import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fioulmarket.fr_35x', ['https://www.fioulmarket.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
