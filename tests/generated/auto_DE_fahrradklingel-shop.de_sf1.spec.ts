import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fahrradklingel-shop.de_sf1', ['https://fahrradklingel-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
