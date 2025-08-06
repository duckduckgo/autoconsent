import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_regiondentsdumidi.ch_qg3', ['https://www.regiondentsdumidi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
