import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_comicvine.gamespot.com_pgc', ['https://comicvine.gamespot.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
