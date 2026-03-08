import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ense3.grenoble-inp.fr_s15', ['https://ense3.grenoble-inp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
