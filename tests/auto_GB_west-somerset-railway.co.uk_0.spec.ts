import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_west-somerset-railway.co.uk_0', ['https://www.west-somerset-railway.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
