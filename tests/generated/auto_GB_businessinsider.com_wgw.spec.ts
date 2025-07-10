import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_businessinsider.com_wgw', ['https://www.businessinsider.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
