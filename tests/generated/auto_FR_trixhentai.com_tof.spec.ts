import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_trixhentai.com_tof', ['https://www.trixhentai.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
