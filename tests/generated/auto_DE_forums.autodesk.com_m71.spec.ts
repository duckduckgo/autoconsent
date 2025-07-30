import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forums.autodesk.com_m71', ['https://forums.autodesk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
