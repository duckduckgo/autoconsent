import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_teile-direkt.ch_9xc', ['https://www.teile-direkt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
