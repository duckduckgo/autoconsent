import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_haushaltstipps.com_9kx', ['https://www.haushaltstipps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
