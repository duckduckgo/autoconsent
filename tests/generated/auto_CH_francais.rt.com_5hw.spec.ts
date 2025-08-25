import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_francais.rt.com_5hw', ['https://francais.rt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
