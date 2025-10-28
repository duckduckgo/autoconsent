import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forums.jeuxonline.info_38z', ['https://forums.jeuxonline.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
