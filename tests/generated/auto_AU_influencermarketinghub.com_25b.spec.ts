import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_influencermarketinghub.com_25b', ['https://influencermarketinghub.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
