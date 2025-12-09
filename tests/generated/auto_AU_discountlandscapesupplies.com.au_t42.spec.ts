import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_discountlandscapesupplies.com.au_t42', ['https://discountlandscapesupplies.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
