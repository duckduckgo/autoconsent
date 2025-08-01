import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_naturitas.com.au_7m0', ['https://www.naturitas.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
