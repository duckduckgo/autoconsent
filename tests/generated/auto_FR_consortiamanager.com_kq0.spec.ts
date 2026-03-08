import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_consortiamanager.com_kq0', ['https://consortiamanager.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
