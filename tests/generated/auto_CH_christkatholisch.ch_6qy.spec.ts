import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_christkatholisch.ch_6qy', ['https://christkatholisch.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
