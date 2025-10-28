import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deineblume.ch_bqa', ['https://www.deineblume.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
