import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_velofactory.ch_6jc', ['https://www.velofactory.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
