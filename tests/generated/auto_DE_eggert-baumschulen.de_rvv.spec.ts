import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eggert-baumschulen.de_rvv', ['https://www.eggert-baumschulen.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
