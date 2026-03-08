import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amandebasilic.com_878', ['https://amandebasilic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
