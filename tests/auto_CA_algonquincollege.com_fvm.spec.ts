import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_algonquincollege.com_fvm', ['https://www.algonquincollege.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
