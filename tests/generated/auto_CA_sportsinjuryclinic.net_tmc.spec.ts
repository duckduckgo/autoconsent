import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sportsinjuryclinic.net_tmc', ['https://www.sportsinjuryclinic.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
