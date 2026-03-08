import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.dollartree.com_ws9', ['https://careers.dollartree.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
