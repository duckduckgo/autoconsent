import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ilgiornale.it_0lo', ['https://www.ilgiornale.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
