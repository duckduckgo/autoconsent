import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_shemalestardb.com_ji4', ['https://shemalestardb.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
