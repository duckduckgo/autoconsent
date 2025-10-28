import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guideachatgamer.com_al9', ['https://guideachatgamer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
