import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondation-hermitage.ch_oef', ['https://fondation-hermitage.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
