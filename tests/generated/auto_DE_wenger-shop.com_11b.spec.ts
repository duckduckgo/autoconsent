import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wenger-shop.com_11b', ['https://de.wenger.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
