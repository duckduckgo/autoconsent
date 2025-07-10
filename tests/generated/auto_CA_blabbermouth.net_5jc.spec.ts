import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blabbermouth.net_5jc', ['https://blabbermouth.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
