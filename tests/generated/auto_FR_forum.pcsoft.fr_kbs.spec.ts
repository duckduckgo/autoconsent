import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum.pcsoft.fr_kbs', ['https://forum.pcsoft.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
