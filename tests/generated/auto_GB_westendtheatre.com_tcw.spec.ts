import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westendtheatre.com_tcw', ['https://www.westendtheatre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
