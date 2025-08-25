import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_buyspares.co.uk_ia7', ['https://www.buyspares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
