import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_colnago.com_e5r', ['https://www.colnago.com/de-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
