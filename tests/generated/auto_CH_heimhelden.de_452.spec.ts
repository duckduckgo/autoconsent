import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heimhelden.de_452', ['https://www.heimhelden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
