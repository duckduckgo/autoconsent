import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dunkindonuts.com_3u3', ['https://www.dunkindonuts.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
