import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_winterthurerwintermarkt.ch_0lk', ['https://www.winterthurerwintermarkt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
