import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_augencentrum.com_1so', ['https://augencentrum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
