import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mountains.ch_vkg', ['https://www.mountains.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
