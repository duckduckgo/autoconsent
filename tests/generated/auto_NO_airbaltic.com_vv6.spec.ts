import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_airbaltic.com_vv6', ['https://www.airbaltic.com/en/index'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
