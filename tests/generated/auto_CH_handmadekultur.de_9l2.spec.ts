import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_handmadekultur.de_9l2', ['https://www.handmadekultur.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
