import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ecco-verde.ch_4od', ['https://www.ecco-verde.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
