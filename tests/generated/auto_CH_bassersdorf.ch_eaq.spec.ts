import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bassersdorf.ch_eaq', ['https://www.bassersdorf.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
