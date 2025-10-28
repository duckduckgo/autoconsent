import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_itslearning.com_onj', ['https://itslearning.com/index.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
