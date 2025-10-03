import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_halleonard.com_x9p', ['https://www.halleonard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
