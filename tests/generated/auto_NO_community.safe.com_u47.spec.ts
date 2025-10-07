import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_community.safe.com_u47', ['https://community.safe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
