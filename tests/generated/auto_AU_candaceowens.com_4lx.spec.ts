import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_candaceowens.com_4lx', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
