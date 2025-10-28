import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_realite-virtuelle.com_d4f', ['https://www.realite-virtuelle.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
