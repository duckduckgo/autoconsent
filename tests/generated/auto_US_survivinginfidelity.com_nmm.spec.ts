import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_survivinginfidelity.com_nmm', ['https://www.survivinginfidelity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
