import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_londontheatres.com_zc1', ['https://www.londontheatres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
