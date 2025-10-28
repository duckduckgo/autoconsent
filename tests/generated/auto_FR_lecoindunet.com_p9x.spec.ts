import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lecoindunet.com_p9x', ['https://www.lecoindunet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
