import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_evrimaquickguide.com_852', ['https://www.evrimaquickguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
