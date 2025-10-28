import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_snowsports.ch_10h', ['https://www.snowsports.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
