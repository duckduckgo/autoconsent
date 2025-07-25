import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_golfdiscount.com_con', ['https://www.golfdiscount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
