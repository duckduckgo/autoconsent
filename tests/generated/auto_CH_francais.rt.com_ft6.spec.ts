import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_francais.rt.com_ft6', ['https://francais.rt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
