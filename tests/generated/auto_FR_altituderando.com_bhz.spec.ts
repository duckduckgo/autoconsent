import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_altituderando.com_bhz', ['https://www.altituderando.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
