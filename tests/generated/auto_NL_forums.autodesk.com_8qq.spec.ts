import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_forums.autodesk.com_8qq', ['https://forums.autodesk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
