import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweizerischer-mieterschutz.ch_z5d', ['https://www.schweizerischer-mieterschutz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
