import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hotelfinse1222.no_zpm', ['https://www.hotelfinse1222.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
