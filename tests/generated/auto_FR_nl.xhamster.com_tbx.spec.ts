import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nl.xhamster.com_tbx', ['https://nl.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
