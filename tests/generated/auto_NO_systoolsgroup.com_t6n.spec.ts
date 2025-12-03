import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_systoolsgroup.com_t6n', ['https://www.systoolsgroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
