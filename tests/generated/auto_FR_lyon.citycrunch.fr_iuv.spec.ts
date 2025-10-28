import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lyon.citycrunch.fr_iuv', ['https://lyon.citycrunch.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
