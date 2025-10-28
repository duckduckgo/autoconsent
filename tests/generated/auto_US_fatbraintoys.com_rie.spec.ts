import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fatbraintoys.com_rie', ['https://fatbraintoys.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
