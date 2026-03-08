import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forums.thelotusforums.com_1ku', ['https://forums.thelotusforums.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
