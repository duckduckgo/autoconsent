import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_candaceowens.com_m25', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
