import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_santeplusmag.com_93r', ['https://www.santeplusmag.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
