import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_forum.netmarble.com_7kn', ['https://forum.netmarble.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
