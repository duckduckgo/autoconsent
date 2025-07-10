import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_comicvine.gamespot.com_k5j', ['https://comicvine.gamespot.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
