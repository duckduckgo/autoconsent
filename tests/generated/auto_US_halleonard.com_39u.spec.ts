import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_halleonard.com_39u', ['https://www.halleonard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
