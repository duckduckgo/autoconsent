import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissindoorsbasel.ch_ivc', ['https://www.swissindoorsbasel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
