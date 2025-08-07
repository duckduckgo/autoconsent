import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fuseenergy.com_xjv', ['https://www.fuseenergy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
