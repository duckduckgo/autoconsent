import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_snbforums.com_x2c', ['https://www.snbforums.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
