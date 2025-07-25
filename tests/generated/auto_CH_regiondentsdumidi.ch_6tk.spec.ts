import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_regiondentsdumidi.ch_6tk', ['https://www.regiondentsdumidi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
