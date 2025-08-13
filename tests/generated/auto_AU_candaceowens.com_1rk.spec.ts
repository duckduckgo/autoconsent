import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_candaceowens.com_1rk', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
