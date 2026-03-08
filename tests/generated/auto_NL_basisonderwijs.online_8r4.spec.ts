import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_basisonderwijs.online_8r4', ['https://basisonderwijs.online/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
