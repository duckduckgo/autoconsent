import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deltafaucet.com_20u', ['https://www.deltafaucet.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
