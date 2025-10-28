import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_the-home-brew-shop.co.uk_19q', ['https://www.the-home-brew-shop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
