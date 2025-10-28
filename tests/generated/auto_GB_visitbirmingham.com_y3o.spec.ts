import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitbirmingham.com_y3o', ['https://visitbirmingham.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
