import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dunkindonuts.com_8np', ['https://www.dunkindonuts.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
