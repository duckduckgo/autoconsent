import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_techsolutions.support.com_y8r', ['https://www.techsolutions.support.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
