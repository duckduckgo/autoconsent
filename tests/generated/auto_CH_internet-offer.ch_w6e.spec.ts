import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_internet-offer.ch_w6e', ['https://www.internet-offer.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
