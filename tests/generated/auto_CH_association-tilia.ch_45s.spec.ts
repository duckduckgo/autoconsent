import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_association-tilia.ch_45s', ['https://association-tilia.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
