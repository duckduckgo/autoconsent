import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_app.goassemble.com_3ax', ['https://app.goassemble.com/auth/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
