import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_helpforum.sky.com_ut7', ['https://helpforum.sky.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
