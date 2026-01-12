import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_airchina.com.au_fex', ['https://www.airchina.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
