import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hjemmeautomasjon.no_7v2', ['https://www.hjemmeautomasjon.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
