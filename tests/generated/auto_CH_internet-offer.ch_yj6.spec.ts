import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_internet-offer.ch_yj6', ['https://www.internet-offer.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
