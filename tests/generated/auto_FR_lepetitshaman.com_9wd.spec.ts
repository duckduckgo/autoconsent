import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lepetitshaman.com_9wd', ['https://lepetitshaman.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
