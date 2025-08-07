import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_golfdiscount.com_k9r', ['https://www.golfdiscount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
