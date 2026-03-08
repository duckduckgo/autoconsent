import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_solaxpower.com_5d2', ['https://au.solaxpower.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
