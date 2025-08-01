import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heimhelden.de_hre', ['https://www.heimhelden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
