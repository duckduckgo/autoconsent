import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_regiondentsdumidi.ch_4ny', ['https://www.regiondentsdumidi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
