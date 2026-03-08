import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.thinkwisesoftware.com_0mw', ['https://community.thinkwisesoftware.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
