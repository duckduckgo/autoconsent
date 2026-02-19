import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.forgeofempires.com_pur', ['https://de-play.forgeofempires.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
