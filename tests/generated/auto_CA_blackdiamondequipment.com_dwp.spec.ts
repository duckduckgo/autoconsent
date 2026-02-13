import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blackdiamondequipment.com_dwp', ['https://blackdiamondequipment.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
