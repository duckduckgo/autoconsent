import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_forums.autodesk.com_fcw', ['https://forums.autodesk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
