import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boutique.arte.tv_oy1', ['https://boutique.arte.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
