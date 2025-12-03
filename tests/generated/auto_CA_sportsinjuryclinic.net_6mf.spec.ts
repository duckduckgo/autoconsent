import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sportsinjuryclinic.net_6mf', ['https://www.sportsinjuryclinic.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
