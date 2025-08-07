import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_evrimaquickguide.com_06s', ['https://www.evrimaquickguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
