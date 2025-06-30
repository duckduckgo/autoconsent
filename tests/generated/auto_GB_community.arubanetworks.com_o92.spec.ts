import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.arubanetworks.com_o92', ['https://community.arubanetworks.com/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
