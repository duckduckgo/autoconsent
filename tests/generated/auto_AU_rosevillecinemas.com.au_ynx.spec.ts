import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rosevillecinemas.com.au_ynx', ['https://www.rosevillecinemas.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
