import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_die-mitte-ow.ch_zqd', ['https://die-mitte-ow.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
