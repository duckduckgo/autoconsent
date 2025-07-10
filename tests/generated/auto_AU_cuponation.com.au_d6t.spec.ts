import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cuponation.com.au_d6t', ['https://www.cuponation.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
