import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jemena.com.au_nij', ['https://www.jemena.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
