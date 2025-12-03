import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ersatzteil-shop24.de_mh5', ['https://ersatzteil-shop24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
