import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_city-car-autovermietung.de_xx8', ['https://city-car-autovermietung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
