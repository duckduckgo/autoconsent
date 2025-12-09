import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_milestonesrestaurants.com_j2k', ['https://milestonesrestaurants.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
