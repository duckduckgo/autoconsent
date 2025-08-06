import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prendre-mon-rdv.com_uvv', ['https://prendre-mon-rdv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
