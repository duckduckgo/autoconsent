import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_vermontcountrystore.com_i29', ['https://www.vermontcountrystore.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
