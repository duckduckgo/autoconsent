import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_researchgate.net_e0h', ['https://www.researchgate.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
