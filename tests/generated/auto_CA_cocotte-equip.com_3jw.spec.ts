import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cocotte-equip.com_3jw', ['https://cocotte-equip.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
