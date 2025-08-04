import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_shemalestardb.com_lr6', ['https://shemalestardb.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
