import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sterneshop.eu_gdx', ['https://www.sterneshop.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
