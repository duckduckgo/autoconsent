import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum.eugenol.com_ugz', ['https://forum.eugenol.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
