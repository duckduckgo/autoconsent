import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_airlineratings.com_41r', ['https://www.airlineratings.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
