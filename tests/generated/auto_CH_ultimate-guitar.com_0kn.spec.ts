import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ultimate-guitar.com_0kn', ['https://www.ultimate-guitar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
