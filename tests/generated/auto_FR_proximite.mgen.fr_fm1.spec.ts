import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_proximite.mgen.fr_fm1', ['https://proximite.mgen.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
