import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sierre-zinal.com_y9m', ['https://www.sierre-zinal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
