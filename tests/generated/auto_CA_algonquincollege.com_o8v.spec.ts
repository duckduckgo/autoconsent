import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_algonquincollege.com_o8v', ['https://www.algonquincollege.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
