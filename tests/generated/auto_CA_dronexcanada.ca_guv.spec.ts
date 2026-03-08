import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dronexcanada.ca_guv', ['https://dronexcanada.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
