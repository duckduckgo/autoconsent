import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thoemus-bikeworld.ch_mv3', ['https://thoemus-bikeworld.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
