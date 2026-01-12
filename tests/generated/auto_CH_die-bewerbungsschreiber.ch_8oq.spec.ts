import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_die-bewerbungsschreiber.ch_8oq', ['https://www.die-bewerbungsschreiber.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
