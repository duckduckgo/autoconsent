import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_airlineratings.com_c0a', ['https://www.airlineratings.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
