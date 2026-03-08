import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_antennenland.net_62i', ['https://antennenland.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
