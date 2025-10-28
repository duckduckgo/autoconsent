import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_canalturf.com_ehy', ['https://www.canalturf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
