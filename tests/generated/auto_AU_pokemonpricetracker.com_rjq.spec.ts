import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pokemonpricetracker.com_rjq', ['https://www.pokemonpricetracker.com/japanese-pokemon-card-prices'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
