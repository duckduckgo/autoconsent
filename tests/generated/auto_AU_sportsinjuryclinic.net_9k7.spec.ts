import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sportsinjuryclinic.net_9k7', ['https://www.sportsinjuryclinic.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
