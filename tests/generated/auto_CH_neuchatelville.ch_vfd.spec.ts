import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_neuchatelville.ch_vfd', ['https://www.neuchatelville.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
