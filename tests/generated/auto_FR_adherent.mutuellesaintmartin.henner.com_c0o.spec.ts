import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adherent.mutuellesaintmartin.henner.com_c0o', ['https://adherent.mutuellesaintmartin.henner.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
