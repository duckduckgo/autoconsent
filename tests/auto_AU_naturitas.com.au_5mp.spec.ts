import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_naturitas.com.au_5mp', ['https://www.naturitas.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
