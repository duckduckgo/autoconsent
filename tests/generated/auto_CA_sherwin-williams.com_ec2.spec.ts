import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sherwin-williams.com_ec2', ['https://www.sherwin-williams.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
