import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_slideshare.net_nce', ['https://www.slideshare.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
