import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_shemalestardb.com_l00', ['https://shemalestardb.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
