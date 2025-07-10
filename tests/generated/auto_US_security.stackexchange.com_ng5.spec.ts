import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_security.stackexchange.com_ng5', ['https://security.stackexchange.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
