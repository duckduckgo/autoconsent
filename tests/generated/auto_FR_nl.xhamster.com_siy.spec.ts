import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nl.xhamster.com_siy', ['https://nl.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
