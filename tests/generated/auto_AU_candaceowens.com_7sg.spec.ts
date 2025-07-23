import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_candaceowens.com_7sg', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
