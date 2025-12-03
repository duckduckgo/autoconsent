import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chatsworth.org_0', ['https://www.chatsworth.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
