import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_apx.lvr.de_wfw', ['https://apx.lvr.de/de/willkommen/willkommen_1.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
