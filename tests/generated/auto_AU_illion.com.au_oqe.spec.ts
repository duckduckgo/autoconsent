import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_illion.com.au_oqe', ['https://www.illion.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
