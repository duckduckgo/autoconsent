import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_drei-thermen-golfresort.com_o8k', ['https://drei-thermen-golfresort.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
