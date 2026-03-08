import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aquarius-prolife.com_xab', ['https://aquarius-prolife.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
