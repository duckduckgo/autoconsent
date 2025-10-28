import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_outdoorresearch.com_gda', ['https://www.outdoorresearch.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
