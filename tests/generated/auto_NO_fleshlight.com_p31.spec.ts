import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fleshlight.com_p31', ['https://www.fleshlight.eu/?utm_source=us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
