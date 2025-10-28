import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_supersummary.com_xnd', ['https://www.supersummary.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
