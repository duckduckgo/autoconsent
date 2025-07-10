import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rustoleum.com_b5t', ['https://www.rustoleum.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
