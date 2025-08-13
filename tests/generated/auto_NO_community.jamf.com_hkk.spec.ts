import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_community.jamf.com_hkk', ['https://community.jamf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
