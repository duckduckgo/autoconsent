import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schmuckmarkt.ch_83z', ['https://www.schmuckmarkt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
