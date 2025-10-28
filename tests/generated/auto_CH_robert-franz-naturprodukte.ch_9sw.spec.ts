import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_robert-franz-naturprodukte.ch_9sw', ['https://robert-franz-naturprodukte.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
