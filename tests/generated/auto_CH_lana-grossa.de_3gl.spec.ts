import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lana-grossa.de_3gl', ['https://www.lana-grossa.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
