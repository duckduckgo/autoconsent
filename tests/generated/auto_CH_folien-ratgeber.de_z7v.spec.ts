import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_folien-ratgeber.de_z7v', ['https://folien-ratgeber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
