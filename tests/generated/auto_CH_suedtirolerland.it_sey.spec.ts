import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_suedtirolerland.it_sey', ['https://www.suedtirolerland.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
