import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eventfrog.ch_mp9', ['https://eventfrog.ch/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
