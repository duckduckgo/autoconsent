import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thesilverforum.com_svu', ['https://www.thesilverforum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
