import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bookmerchant.com.au_zop', ['https://bookmerchant.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
