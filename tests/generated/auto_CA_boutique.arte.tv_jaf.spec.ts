import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_boutique.arte.tv_jaf', ['https://boutique.arte.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
