import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_secure.ally.com_vha', ['https://secure.ally.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
