import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_shop.healthmasters.com.au_9ec', ['https://shop.healthmasters.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
