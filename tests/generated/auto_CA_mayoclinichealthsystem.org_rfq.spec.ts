import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mayoclinichealthsystem.org_rfq', ['https://www.mayoclinichealthsystem.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
