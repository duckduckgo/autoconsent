import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_helpforum.sky.com_smk', ['https://helpforum.sky.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
