import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_computerwissen.de_rt0', ['https://www.computerwissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
