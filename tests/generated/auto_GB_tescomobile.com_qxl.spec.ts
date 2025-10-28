import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tescomobile.com_qxl', ['https://www.tescomobile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
