import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lemalefrancais.com_ndk', ['https://www.lemalefrancais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
