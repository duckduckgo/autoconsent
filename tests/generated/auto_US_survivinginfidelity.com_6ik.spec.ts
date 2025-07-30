import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_survivinginfidelity.com_6ik', ['https://www.survivinginfidelity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
