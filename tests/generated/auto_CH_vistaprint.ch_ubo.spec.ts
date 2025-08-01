import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vistaprint.ch_ubo', ['https://www.vistaprint.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
