import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_christies.com_qrl', ['https://www.christies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
