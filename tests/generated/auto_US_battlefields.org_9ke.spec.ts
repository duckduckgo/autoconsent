import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_battlefields.org_9ke', ['https://www.battlefields.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
