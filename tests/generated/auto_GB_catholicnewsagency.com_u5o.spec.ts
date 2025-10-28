import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_catholicnewsagency.com_u5o', ['https://www.catholicnewsagency.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
