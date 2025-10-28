import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sakurajav.com_nvn', ['https://www.sakurajav.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
