import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_crcindustries.com.au_d55', ['https://crcindustries.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
