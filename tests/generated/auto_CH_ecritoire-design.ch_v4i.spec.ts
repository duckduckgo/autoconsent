import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ecritoire-design.ch_v4i', ['https://ecritoire-design.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
