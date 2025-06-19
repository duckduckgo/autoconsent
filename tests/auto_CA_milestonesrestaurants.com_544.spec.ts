import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_milestonesrestaurants.com_544', ['https://milestonesrestaurants.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
