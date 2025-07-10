import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_airlineratings.com_5nw', ['https://www.airlineratings.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
