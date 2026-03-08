import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_calicoandivy.com_eff', ['https://calicoandivy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
