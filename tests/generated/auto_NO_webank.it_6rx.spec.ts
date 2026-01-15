import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_webank.it_6rx', ['https://webank.it/webankpub/wbresp/home.do'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
