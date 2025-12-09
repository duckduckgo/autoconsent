import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_streamawards.de_64b', ['https://streamawards.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
