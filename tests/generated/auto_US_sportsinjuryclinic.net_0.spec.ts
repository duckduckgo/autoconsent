import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sportsinjuryclinic.net_0', ['https://www.sportsinjuryclinic.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
