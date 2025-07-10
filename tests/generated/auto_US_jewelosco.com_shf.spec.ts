import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jewelosco.com_shf', ['https://www.jewelosco.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
