import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_slideshare.net_9qe', ['https://www.slideshare.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
