import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_helpforum.sky.com_2jw', ['https://helpforum.sky.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
