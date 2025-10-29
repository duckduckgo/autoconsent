import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissindoorsbasel.ch_99r', ['https://www.swissindoorsbasel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
