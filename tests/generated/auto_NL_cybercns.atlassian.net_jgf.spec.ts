import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cybercns.atlassian.net_jgf', ['https://cybercns.atlassian.net/wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
