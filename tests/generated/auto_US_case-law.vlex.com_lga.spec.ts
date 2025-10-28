import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_case-law.vlex.com_lga', ['https://case-law.vlex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
