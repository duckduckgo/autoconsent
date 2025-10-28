import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_daepp-pflanzen.ch_gdn', ['https://www.daepp-pflanzen.ch/de-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
