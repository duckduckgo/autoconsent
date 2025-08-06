import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eventfrog.ch_i18', ['https://eventfrog.ch/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
