import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_totaljerkface.com_6o2', ['https://totaljerkface.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
