import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_shemalestardb.com_4to', ['https://shemalestardb.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
