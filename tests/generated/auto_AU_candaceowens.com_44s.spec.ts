import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_candaceowens.com_44s', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
