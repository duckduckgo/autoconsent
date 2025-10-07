import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thesilverforum.com_7r8', ['https://www.thesilverforum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
