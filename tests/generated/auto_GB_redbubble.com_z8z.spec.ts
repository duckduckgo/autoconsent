import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_redbubble.com_z8z', ['https://www.redbubble.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
