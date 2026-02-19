import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_quintacarrascal.com_f1h', ['https://www.quintacarrascal.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
