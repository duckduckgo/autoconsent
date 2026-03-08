import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bureauingenieurs.ch_av3', ['https://bureauingenieurs.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
