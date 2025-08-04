import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nas-forum.com_qcw', ['https://www.nas-forum.com/forum/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
