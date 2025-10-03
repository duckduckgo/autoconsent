import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_altemarkthalle.ch_ecf', ['https://altemarkthalle.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
