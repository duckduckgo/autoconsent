import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_department56.com_2lb', ['https://www.department56.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
