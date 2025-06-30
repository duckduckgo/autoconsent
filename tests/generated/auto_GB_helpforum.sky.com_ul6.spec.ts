import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_helpforum.sky.com_ul6', ['https://helpforum.sky.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
