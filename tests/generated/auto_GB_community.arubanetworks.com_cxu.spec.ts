import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.arubanetworks.com_cxu', ['https://community.arubanetworks.com/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
