import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rustoleum.com_6kl', ['https://www.rustoleum.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
