import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_psychologie-heute.de_wvv', ['https://www.psychologie-heute.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
