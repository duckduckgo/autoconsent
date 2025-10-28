import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_slideshare.net_fce', ['https://www.slideshare.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
