import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_allergologie.insel.ch_88s', ['https://allergologie.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
