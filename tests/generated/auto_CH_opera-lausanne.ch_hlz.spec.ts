import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_opera-lausanne.ch_hlz', ['https://www.opera-lausanne.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
