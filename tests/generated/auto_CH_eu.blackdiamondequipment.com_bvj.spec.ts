import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eu.blackdiamondequipment.com_bvj', ['https://eu.blackdiamondequipment.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
