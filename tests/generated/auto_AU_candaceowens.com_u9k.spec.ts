import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_candaceowens.com_u9k', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
