import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_survivinginfidelity.com_42u', ['https://www.survivinginfidelity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
