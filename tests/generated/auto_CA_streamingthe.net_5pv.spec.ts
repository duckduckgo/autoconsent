import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_streamingthe.net_5pv', ['https://www.streamingthe.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
