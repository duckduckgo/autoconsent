import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jemena.com.au_wtq', ['https://www.jemena.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
