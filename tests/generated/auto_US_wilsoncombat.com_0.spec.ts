import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wilsoncombat.com_0', ['https://wilsoncombat.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
