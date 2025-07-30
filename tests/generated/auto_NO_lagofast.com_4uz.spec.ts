import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lagofast.com_4uz', ['https://www.lagofast.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
