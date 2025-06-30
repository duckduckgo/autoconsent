import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crazygames.com_ip7', ['https://www.crazygames.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
