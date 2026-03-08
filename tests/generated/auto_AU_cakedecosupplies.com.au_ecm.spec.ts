import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cakedecosupplies.com.au_ecm', ['https://cakedecosupplies.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
