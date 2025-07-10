import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_swansonvitamins.com_uqo', ['https://www.swansonvitamins.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
