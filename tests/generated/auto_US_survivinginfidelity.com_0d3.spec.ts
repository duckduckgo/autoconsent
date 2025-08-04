import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_survivinginfidelity.com_0d3', ['https://www.survivinginfidelity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
