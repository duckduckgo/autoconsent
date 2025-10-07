import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mayoclinichealthsystem.org_elj', ['https://www.mayoclinichealthsystem.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
