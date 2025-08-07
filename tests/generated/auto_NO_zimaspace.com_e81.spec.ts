import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zimaspace.com_e81', ['https://www.zimaspace.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
