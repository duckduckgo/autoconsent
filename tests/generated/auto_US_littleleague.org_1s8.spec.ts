import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_littleleague.org_1s8', ['https://www.littleleague.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
