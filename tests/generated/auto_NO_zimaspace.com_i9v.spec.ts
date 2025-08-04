import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zimaspace.com_i9v', ['https://www.zimaspace.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
