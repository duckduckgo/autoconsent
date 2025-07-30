import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eventfrog.ch_6qx', ['https://eventfrog.ch/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
