import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forums.autodesk.com_48r', ['https://forums.autodesk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
