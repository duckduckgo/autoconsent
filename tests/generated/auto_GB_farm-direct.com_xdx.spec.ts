import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_farm-direct.com_xdx', ['https://farm-direct.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
