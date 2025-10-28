import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lolesports.com_0ni', ['https://lolesports.com/fr-FR/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
