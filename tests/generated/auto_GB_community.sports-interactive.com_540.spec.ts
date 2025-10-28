import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.sports-interactive.com_540', ['https://community.sports-interactive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
