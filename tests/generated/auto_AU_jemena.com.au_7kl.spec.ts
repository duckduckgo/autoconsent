import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jemena.com.au_7kl', ['https://www.jemena.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
