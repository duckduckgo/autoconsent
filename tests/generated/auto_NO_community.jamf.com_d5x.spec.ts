import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_community.jamf.com_d5x', ['https://community.jamf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
