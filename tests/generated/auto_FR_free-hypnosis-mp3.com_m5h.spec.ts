import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_free-hypnosis-mp3.com_m5h', ['https://free-hypnosis-mp3.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
