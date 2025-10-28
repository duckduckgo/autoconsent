import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_puregym.swiss_sso', ['https://www.puregym.swiss/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
