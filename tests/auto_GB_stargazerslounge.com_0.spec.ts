import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_stargazerslounge.com_0', ['https://stargazerslounge.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
