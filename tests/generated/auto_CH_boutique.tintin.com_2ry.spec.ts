import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boutique.tintin.com_2ry', ['https://boutique.tintin.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
