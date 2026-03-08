import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_forum.2-ventiler.de_rz1', ['https://forum.2-ventiler.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
