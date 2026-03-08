import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_alexandregames.com_bxo', ['https://alexandregames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
