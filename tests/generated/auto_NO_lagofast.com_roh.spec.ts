import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lagofast.com_roh', ['https://www.lagofast.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
