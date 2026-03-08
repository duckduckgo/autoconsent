import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_destination-orbite.net_laa', ['https://destination-orbite.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
