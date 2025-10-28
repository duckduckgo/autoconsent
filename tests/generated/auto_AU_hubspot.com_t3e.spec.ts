import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hubspot.com_t3e', ['https://www.hubspot.com/home-pg'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
