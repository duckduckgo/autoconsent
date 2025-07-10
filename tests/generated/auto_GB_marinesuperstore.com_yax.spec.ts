import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_marinesuperstore.com_yax', ['https://www.marinesuperstore.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
