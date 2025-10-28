import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.itslearning.com_z96', ['https://nl.itslearning.com/index.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
