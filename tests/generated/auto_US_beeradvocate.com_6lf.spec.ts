import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_beeradvocate.com_6lf', ['https://www.beeradvocate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
