import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_balconysolar.ch_j38', ['https://balconysolar.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
