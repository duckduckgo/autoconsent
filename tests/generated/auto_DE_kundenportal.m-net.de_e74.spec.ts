import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kundenportal.m-net.de_e74', ['https://kundenportal.m-net.de/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
