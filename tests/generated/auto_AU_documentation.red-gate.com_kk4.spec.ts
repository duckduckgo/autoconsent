import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_documentation.red-gate.com_kk4', ['https://documentation.red-gate.com/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
