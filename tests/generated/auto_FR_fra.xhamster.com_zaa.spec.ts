import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fra.xhamster.com_zaa', ['https://fra.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
