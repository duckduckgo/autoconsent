import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oekk.ch_vtu', ['https://www.oekk.ch/en/private-clients'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
