import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dredge.fandom.com_0g3', ['https://dredge.fandom.com/wiki/DREDGE_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
