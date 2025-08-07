import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dxdelivery.com_0', ['https://www.dxdelivery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
