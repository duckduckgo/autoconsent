import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_techsolutions.support.com_qai', ['https://www.techsolutions.support.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
