import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_provenwinners.com_6oy', ['https://www.provenwinners.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
