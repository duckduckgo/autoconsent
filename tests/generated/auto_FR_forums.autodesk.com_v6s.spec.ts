import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forums.autodesk.com_v6s', ['https://forums.autodesk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
