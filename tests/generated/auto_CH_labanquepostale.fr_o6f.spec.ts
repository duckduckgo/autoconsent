import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_labanquepostale.fr_o6f', ['https://www.labanquepostale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
